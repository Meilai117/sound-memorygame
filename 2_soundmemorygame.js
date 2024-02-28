const cards = document.querySelectorAll(".card");
//cardにクリックイベントを追加
cards.forEach((card) => card.addEventListener("click", flipCard));

//シャッフルして配置
(function shuffle() {
    cards.forEach((card) => {
        let newPosition = Math.floor(Math.random() * 24);
        card.style.order = newPosition;
    });
})();

let hasFlippedCard = false; //反転したかどうか
let first, second;
let lockBoard = false; //動かなくする

//反転させる関数
function flipCard() {
    const flipAudio = new Audio('./elsesound/flip.mp3');
    flipAudio.currentTime = 0;
    flipAudio.play();
    
    if (lockBoard) return; //動かない状態のときはそのままreturn
    if (this === first) return; 

    this.classList.add("flip"); //thisに"flip"を加えて回転させる
    if (!hasFlippedCard) { //hasFlippedCard = falseのとき
        hasFlippedCard = true;  //反転したらtrue
        first = this;
        return;
    }
    second = this;
    // hasFlippedCard = false;
    checkForMatch();
}

//二つのカードが同じかどうか判定する関数
function checkForMatch() {
    let isMatch = first.dataset.animal === second.dataset.animal;
    isMatch ? disableCards() : unflipCards();  //isMatchが真ならdisableCard,偽ならunflipcards
}

let animalList = [];
//同じカードだったら
function disableCards() {
    //正解の音
    const correctAudip = new Audio('./elsesound/correct.mp3');
    setTimeout(() => {
        correctAudio.currentTime = 0;
        correctAudio.play();
    }, 1500);
    //動物の正体
    const backShadow = document.getElementsByClassName("backShadow");
    const back = document.getElementsByClassName("back");
    for (let i = 0; i < 24; i++) {
        if (first.dataset.animal === backShadow[i].dataset.animal) {
            backShadow[i].style.zIndex = "0";
            back[i].style.zIndex = "1";
            back[i].animate([{opacity: '0'}, {opacity: '1'}], 500)
            back[i].style.opacity = "1";
            animalList.push(i);
        }
        setTimeout(() => {
            if (animalList.length === 4) {
                window.location.href = "./3_end.html";
            }
        }, 4000);
    }
    
    //クリックイベントを無くす
    first.removeEventListener("click", flipCard);
    second.removeEventListener("click", flipCard);
    //リセット
    resetBoard();
}
//違うカードだったら
function unflipCards() {
    lockBoard = true;
    //タイマーセット
    setTimeout(() => {
        first.classList.remove("flip");
        second.classList.remove("flip");
        //lockBoard = false;
        resetBoard();
    }, 1000);
}

//リセットする関数
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [first, second] = [null, null];
}

//動物の鳴き声
function catAudio() {
    const catAudio = document.getElementById("catAudio");
    catAudio.currentTime = 0; //連続クリックに対応
    catAudio.play(); //クリックしたら音を再生
}
function chickAudio() {
    const chickAudio = document.getElementById("chickAudio");
    chickAudio.currentTime = 0;
    chickAudio.play();
}
function cowAudio() {
    const cowAudio = document.getElementById("cowAudio");
    cowAudio.currentTime = 0;
    cowAudio.play();
}
function dogAudio() {
    const dogAudio = document.getElementById("dogAudio");
    dogAudio.currentTime = 0;
    dogAudio.play();
}
function horseAudio() {
    const duckAudio = document.getElementById("horseAudio");
    duckAudio.currentTime = 0;
    duckAudio.play();
}
function elephantAudio() {
    const elephantAudio = document.getElementById("elephantAudio");
    elephantAudio.currentTime = 0;
    elephantAudio.play();
}
function frogAudio() {
    const frogAudio = document.getElementById("frogAudio");
    frogAudio.currentTime = 0;
    frogAudio.play();
}
function lionAudio() {
    const lionAudio = document.getElementById("lionAudio");
    lionAudio.currentTime = 0;
    lionAudio.play();
}
function mouseAudio() {
    const mouseAudio = document.getElementById("mouseAudio");
    mouseAudio.currentTime = 0;
    mouseAudio.play();
}
function owlAudio() {
    const owlAudio = document.getElementById("owlAudio");
    owlAudio.currentTime = 0;
    owlAudio.play();
}
function pigAudio() {
    const pigAudio = document.getElementById("pigAudio");
    pigAudio.currentTime = 0;
    pigAudio.play();
}
function sheepAudio() {
    const sheepAudio = document.getElementById("sheepAudio");
    sheepAudio.currentTime = 0;
    sheepAudio.play();
}
