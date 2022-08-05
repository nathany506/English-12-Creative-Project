// Variables
const tobaccoTin = document.getElementById('tobaccoTin');
const tobaccoTin1 = document.getElementById('tobaccoTin1');
const tobaccoTin2 = document.getElementById('tobaccoTin2');
const tobaccoTin3 = document.getElementById('tobaccoTin3');
const tobaccoTin4 = document.getElementById('tobaccoTin4');
const tobaccoTinOpen = document.getElementById('tobaccoTinOpen');
let creaking = new Audio('creaking.mp3')
let rustCounter = 0;

window.onload = () => {
    console.log('ok')
}
function rust () {
    if (rustCounter == 0) {
        tobaccoTin.style.display = "none";
        tobaccoTin1.style.display = "block"
        creaking.play();
        rustCounter ++;
    } else if (rustCounter == 1) {
        tobaccoTin1.style.display = "none";
        tobaccoTin2.style.display = "block"
        creaking.play();
        rustCounter ++;
    } else if (rustCounter == 2) {
        tobaccoTin2.style.display = "none";
        tobaccoTin3.style.display = "block"
        creaking.play();
        rustCounter ++;
    } else if (rustCounter == 3) {
        tobaccoTin3.style.display = "none";
        tobaccoTin4.style.display = "block"
        creaking.play();
        rustCounter ++;
    } else if (rustCounter == 4) {
        tobaccoTin4.style.display = "none";
        tobaccoTinOpen.style.display = "block";
        creaking.play();
    }
}
function treePage () {
    window.open('tree.html',target="_self")
    tobaccoTinOpen.style.diplay = "none";
    rustCounter = 0;
}
