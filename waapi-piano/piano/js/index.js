(function() {
    'use strict';

    var isSP, ctx, xml, data14, data, frequencyRatioTempered, keyboards;

    // コンテキストを生成
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    ctx = new AudioContext();

    // 音源ファイルをバイナリデータとして取得
    xml = new XMLHttpRequest();
    xml.responseType = 'arraybuffer';
    xml.open('GET', 'waapi-piano/piano/media/German Concert D 034 083.ogg', true); //這是
    xml.onload = function() {
        // 音源ファイルをバイナリデータからデコード
        ctx.decodeAudioData(
            xml.response,
            function(_data) {
                data14 = _data;
            },
            function(e) {
                alert(e.err);
            }
        );
    };
    xml.send();
    
    const xml2 = new XMLHttpRequest();
    xml2.responseType = 'arraybuffer';
    xml2.open('GET', 'waapi-piano/piano/media/German Concert D 072 083.ogg', true); //這是C5，第52號鍵
    xml2.onload = function() {
        // 音源ファイルをバイナリデータからデコード
        ctx.decodeAudioData(
            xml2.response,
            function(_data) {
                data = _data;
            },
            function(e) {
                alert(e.err);
            }
        );
    };
    xml2.send();

    isSP = typeof window.ontouchstart !== 'undefined';

    // 平均律における、ある音の次の音に対する周波数比(近似値)
    frequencyRatioTempered = 1.059463;

    // 鍵盤要素の集合を配列化する
    keyboards = Array.prototype.slice.call(
        document.getElementsByClassName('keyboard')
    );
    // 高い方から順に、鍵盤要素のクリック/タッチイベントを登録する
    // keyboards.slice(0,13).reverse().map(function(keyboard, index) {
    //     var i, frequencyRatio;
    //     // 基準音から何音はなれているかで、周波数比を求める
    //     frequencyRatio = 1;
    //     for (i = 0; i < index; i++) {
    //         frequencyRatio /= frequencyRatioTempered;
    //     }
    //     keyboard.addEventListener(isSP ? 'touchstart' : 'click', function() {
    //         var bufferSource;
    //         bufferSource = ctx.createBufferSource();
    //         bufferSource.buffer = data14;
    //         // 音源再生速度の比率変更で、音源の高さを調整
    //         bufferSource.playbackRate.value = frequencyRatio;
    //         bufferSource.connect(ctx.destination);
    //         bufferSource.start(0);
    //     });
    // });
    // keyboards.slice(13,52).reverse().map(function(keyboard, index) {
    //     var i, frequencyRatio;
    //     // 基準音から何音はなれているかで、周波数比を求める
    //     frequencyRatio = 1;
    //     for (i = 0; i < index; i++) {
    //         frequencyRatio /= frequencyRatioTempered;
    //     }
    //     keyboard.addEventListener(isSP ? 'touchstart' : 'click', function() {
    //         var bufferSource;
    //         bufferSource = ctx.createBufferSource();
    //         bufferSource.buffer = data;
    //         // 音源再生速度の比率変更で、音源の高さを調整
    //         bufferSource.playbackRate.value = frequencyRatio;
    //         bufferSource.connect(ctx.destination);
    //         bufferSource.start(0);
    //     });
    // });
    // keyboards.slice(52).map(function(keyboard, index) {
    //     var i, frequencyRatio;
    //     // 基準音から何音はなれているかで、周波数比を求める
    //     frequencyRatio = 1;
    //     for (i = 0; i < index; i++) {
    //         frequencyRatio *= frequencyRatioTempered;
    //     }
    //     keyboard.addEventListener(isSP ? 'touchstart' : 'click', function() {
    //         var bufferSource;
    //         bufferSource = ctx.createBufferSource();
    //         bufferSource.buffer = data;
    //         // 音源再生速度の比率変更で、音源の高さを調整
    //         bufferSource.playbackRate.value = frequencyRatio;
    //         bufferSource.connect(ctx.destination);
    //         bufferSource.start(0);
    //     });
    // });

    keyboards.map(async (keyboard, index) => {
        console.log(index)
        const data = await new Promise((resolve, reject) => {
            const xml = new XMLHttpRequest();
            xml.responseType = 'arraybuffer';
            xml.open('GET', `waapi-piano/piano/media/German Concert D ${(index-0+21).toString().padStart(3, '0')} 083.ogg`, true); //這是C5，第52號鍵
            xml.onload = function() {
                // 音源ファイルをバイナリデータからデコード
                ctx.decodeAudioData(
                    xml.response,
                    function(_data) {
                        resolve(_data)
                    },
                    function(e) {
                        alert(e.err);
                    }
                );
            };
            xml.send();
        })

        keyboard.addEventListener(isSP ? 'touchstart' : 'click', function() {
            var bufferSource;
            bufferSource = ctx.createBufferSource();
            bufferSource.buffer = data;
            // 音源再生速度の比率変更で、音源の高さを調整
            bufferSource.playbackRate.value = 1;
            bufferSource.connect(ctx.destination);
            bufferSource.start(0);
        });
    });

    let keyboard_black_number = 0
    document.querySelectorAll('.keyboard').forEach((v,k)=>{
        if (v.classList.contains('keyboard-black')) {
            v.style.left = `${100/52*(k- keyboard_black_number)-(100/52/4)}%`
            keyboard_black_number++
        }
    })
})();