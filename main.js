function wSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
}

// document.querySelector(".w").addEventListener('click', function () {
//     wSound("sons/tom-1.mp3")
// });

// document.querySelector(".a").addEventListener('click', function () {
//     wSound("sons/tom-2.mp3")
// });

// document.querySelector(".s").addEventListener('click', function () {
//     wSound("sons/tom-3.mp3")
// });

// document.querySelector(".d").addEventListener('click', function () {
//     wSound("sons/tom-4.mp3")
// });

// document.querySelector(".j").addEventListener('click', function(){
//     wSound("sons/snare.mp3")
//    });

//    document.querySelector(".k").addEventListener('click', function(){
//     wSound("sons/crash.mp3")
//    });

//    document.querySelector(".l").addEventListener('click', function(){
//     wSound("sons/kick-bass.mp3")
//    });

function wSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
}

const buttons = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
const sounds = {
    w: "sons/tom-1.mp3",
    a: "sons/tom-2.mp3",
    s: "sons/tom-3.mp3",
    d: "sons/tom-4.mp3",
    j: "sons/snare.mp3",
    k: "sons/crash.mp3",
    l: "sons/kick-bass.mp3"
};

buttons.forEach(button => {
    document.querySelector(`.${button}`).addEventListener('click', function () {
        wSound(sounds[button]);
    });
});


   const sons = {
    w: 'sons/tom-1.mp3',
    a: 'sons/tom-2.mp3',
    s: 'sons/tom-3.mp3',
    d: 'sons/tom-4.mp3',
    j: 'sons/snare.mp3',
    k: 'sons/crash.mp3',
    l: 'sons/kick-bass.mp3'
};

document.addEventListener('keydown', function(event) {
    const teclaPressionada = event.key.toLowerCase();
    if (sons[teclaPressionada]) {
        const audio = new Audio(sons[teclaPressionada]);
        audio.play();
    }
});
