(async () => {
    'use strict';

    var isSP, ctx, frequencyRatioTempered, keyboards;

    // コンテキストを生成
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    ctx = new AudioContext();

    const analyser = ctx.createAnalyser()
    analyser.fftSize = fftSize

    // 音源ファイルをバイナリデータとして取得
    const data = await new Promise((resolve, reject) => {
        const xml = new XMLHttpRequest();
        xml.responseType = 'arraybuffer';
        xml.open('GET', 'waapi-piano/piano/media/German Concert D 072 083.ogg', true); //這是
        // xml.open('GET', 'waapi-piano/piano/media/piano.wav', true); //這是
        xml.onload = function () {
            // 音源ファイルをバイナリデータからデコード
            ctx.decodeAudioData(
                xml.response,
                function (_data) {
                    resolve(_data)
                },
                function (e) {
                    alert(e.err);
                }
            );
        };
        xml.send();
    })

    isSP = typeof window.ontouchstart !== 'undefined';

    // 平均律における、ある音の次の音に対する周波数比(近似値)
    frequencyRatioTempered = 1.059463;

    // 鍵盤要素の集合を配列化する
    keyboards = Array.prototype.slice.call(
        document.getElementsByClassName('keyboard')
    );

    //方法1
    keyboards.slice(0).map(function (keyboard, index) {
        var i, frequencyRatio;
        // 基準音から何音はなれているかで、周波数比を求める
        frequencyRatio = (Math.pow(2, 1 / 12) ** (52 - 49)) * 440;
        frequencyRatio = (Math.pow(2, 1 / 12) ** (index + 1 - 49)) * 440 / frequencyRatio;
        keyboard.addEventListener(isSP ? 'touchstart' : 'click', function () {
            var bufferSource;
            bufferSource = ctx.createBufferSource();
            bufferSource.buffer = data;
            // 音源再生速度の比率変更で、音源の高さを調整
            bufferSource.playbackRate.value = frequencyRatio;
            bufferSource.connect(ctx.destination);
            
            bufferSource.connect(analyser)
            bufferSource.start(0);
        });
    });

    //方法2
    // keyboards.map(async (keyboard, index) => {
    //     console.log(index)
    //     const data = await new Promise((resolve, reject) => {
    //         const xml = new XMLHttpRequest();
    //         xml.responseType = 'arraybuffer';
    //         xml.open('GET', `waapi-piano/piano/media/German Concert D ${(index-0+21).toString().padStart(3, '0')} 083.ogg`, true); //這是C5，第52號鍵
    //         xml.onload = function() {
    //             // 音源ファイルをバイナリデータからデコード
    //             ctx.decodeAudioData(
    //                 xml.response,
    //                 function(_data) {
    //                     resolve(_data)
    //                 },
    //                 function(e) {
    //                     alert(e.err);
    //                 }
    //             );
    //         };
    //         xml.send();
    //     })
    //     keyboard.addEventListener(isSP ? 'touchstart' : 'click', function() {
    //         var bufferSource;
    //         bufferSource = ctx.createBufferSource();
    //         bufferSource.buffer = data;
    //         // 音源再生速度の比率変更で、音源の高さを調整
    //         bufferSource.playbackRate.value = 1;
    //         bufferSource.connect(ctx.destination);
    //         bufferSource.connect(analyser)
    //         bufferSource.start(0);
    //     });
    // });

    let keyboard_black_number = 0
    document.querySelectorAll('.keyboard').forEach((v, k) => {
        if (v.classList.contains('keyboard-black')) {
            v.style.left = `${100/52*(k- keyboard_black_number)-(100/52/4)}%`
            keyboard_black_number++
        }
    })

    
    //讀取FFT Data並顯示
    const getFFTData = () => {
      const fftData = new Uint8Array(fftSize/2)
      const fftData_Time = new Uint8Array(fftSize/2)

        const fftArray = new Uint8Array(fftSize/2)
        analyser.getByteFrequencyData(fftData)
        
        // fftArray.forEach((v2,k2) => fftData[k2]=fftData[k2] > v2 ? fftData[k2] : v2)
        
        const fftArray_Time = new Uint8Array(fftSize/2)
        analyser.getByteTimeDomainData(fftData_Time)
        // fftArray_Time.forEach((v2,k2) => fftData_Time[k2]=fftData_Time[k2] > v2 ? fftData_Time[k2] : v2)
      
      
      // console.log(fftData.map(v=>v*44100/2/(fftSize/2)))
      for (const k in fftData) {
        // if (k>=fftSize/2) break
        document.querySelector(`#fftData>div:nth-child(${k-0+1})`).style.height = `${fftData[k]}px`
      }
      for (const k in fftData_Time) {
        // if (k>=fftSize/2) break
        document.querySelector(`#fftData_Time>div:nth-child(${k-0+1})`).style.height = `${fftData_Time[k]}px`
      }
    //   if (isPlaying) {
        setTimeout(getFFTData,15)
    //   }
    }
    getFFTData()
})();