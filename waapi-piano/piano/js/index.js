(async () => {
    'use strict';

    let ctx, analyser
    const fftSize = 1024 
    const frequencyRatio = (Math.pow(2, 1 / 12) ** (49 - 49)) //基準音C5 52 56
    let frequency = 440
    let volume = 0.3

    const init = async () => {
        // コンテキストを生成
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        ctx = new AudioContext()

        analyser = ctx.createAnalyser()
        analyser.fftSize = fftSize

        const ctx_gainNode = ctx.createGain()
        // ctx_gainNode.connect(analyser)
        // ctx_gainNode.connect(ctx.destination)

        const biquad1 = ctx.createBiquadFilter()
        biquad1.type = 'lowpass'
        biquad1.frequency.value = (Math.pow(2, 1 / 12) ** (88 - 49)) * frequency
        biquad1.Q.value = 0

        const biquad2 = ctx.createBiquadFilter();
        biquad2.type = 'highpass';
        biquad2.frequency.value = (Math.pow(2, 1 / 12) ** (1 - 49)) * frequency
        biquad2.Q.value = 0

        ctx_gainNode.connect(biquad1)
        biquad1.connect(biquad2)
        biquad2.connect(ctx.destination)
        biquad2.connect(analyser)

        // 音源ファイルをバイナリデータとして取得
        const piano_audio_data = await new Promise((resolve, reject) => {
            const xml = new XMLHttpRequest();
            xml.responseType = 'arraybuffer';
            xml.open('GET', 'waapi-piano/piano/media/German Concert D 069 083.ogg', true); //72 76
            // xml.open('GET', 'waapi-piano/piano/media/piano.wav', true); //
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
        // console.log(piano_audio_data)
        // console.log(piano_audio_data.getChannelData(0))
        // console.log(piano_audio_data.getChannelData(1))
        //顯示圖表
        const chart = document.getElementById('myChart');
        const data = {
            labels: [],
            datasets: [{
            label: 'My First Dataset',
            data: [],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0,
            borderWidth: 1
            }]
        };
        const myChart = new Chart(chart,  {
            type: 'line',
            options: {
                pointRadius: 0,
                plugins:{
                    decimation: {
                        enabled:true,
                        algorithm:'lttb'
                    }
                }
            },
            data: data,
        })

        const channelData0 = piano_audio_data.getChannelData(0)
        const channelData1 = piano_audio_data.getChannelData(1)
        for (let k = 0 ; k < piano_audio_data.sampleRate /16; k++) {
            const v = channelData0[k]
            myChart.data.labels.push(k - 0 + 1)
            myChart.data.datasets[0].data.push(v)
        }
        myChart.update()

        const isSP = typeof window.ontouchstart !== 'undefined';

        // 鍵盤要素の集合を配列化する
        const keyboards = Array.prototype.slice.call(
            document.querySelectorAll('.keyboard')
        )

        //方法1
        keyboards.slice(0).map(function (keyboard, index) {
            keyboard.addEventListener(isSP ? 'touchstart' : 'click', function () {
                //以基準音轉換為等比音並且判斷是否轉為432HZ
                const playbackRate = (Math.pow(2, 1 / 12) ** (index + 1 - 49)) / frequencyRatio * frequency / 440

                const bufferSource = ctx.createBufferSource();
                const gainNode = ctx.createGain()
                bufferSource.buffer = piano_audio_data
                bufferSource.playbackRate.value = playbackRate
                gainNode.gain.value = volume //音量
                
                const biquad1 = ctx.createBiquadFilter()
                biquad1.type = 'lowpass'
                biquad1.frequency.value = playbackRate * 440
                biquad1.Q.value = 0
                bufferSource.connect(gainNode)
                gainNode.connect(biquad1)
                biquad1.connect(ctx_gainNode)
                
                bufferSource.start(bufferSource.context.currentTime)

                bufferSource.stop(bufferSource.context.currentTime + Math.E)
                
                // const channelData0 = piano_audio_data.getChannelData(0)
                // const channelData1 = piano_audio_data.getChannelData(1)
                // myChart.data.labels = []
                // myChart.data.datasets[0].data = []
                // for (let k = 0 ; k < piano_audio_data.sampleRate * playbackRate ; k++) {
                //     const v = channelData0[k]
                //     myChart.data.labels.push(k - 0 + 1)
                //     myChart.data.datasets[0].data.push(v)
                // }
                // myChart.update()

            });
        });

        //方法2
        // keyboards.map(async (keyboard, index) => {
        //     const piano_audio_data = await new Promise((resolve, reject) => {
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
        //         bufferSource.buffer = piano_audio_data;
        //         // 音源再生速度の比率変更で、音源の高さを調整
        //         bufferSource.playbackRate.value = 1;
        //         gainNode.gain.value = volume // 音量  
        //         bufferSource.connect(gainNode)
        //         gainNode.connect(ctx.destination)
        //         // bufferSource.connect(ctx.destination)
        //         bufferSource.connect(analyser)
        //         bufferSource.start(0);
        //     });
        // });
        
        getFFTData()
    }

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

    window.piano = {
        init,
        ctx,
        setVolume: (v) => {
            volume = v
        },
        setFrequency: (v) => {
            frequency = v
        }
    }
})();