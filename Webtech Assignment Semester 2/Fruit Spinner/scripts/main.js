// declaring constants
const creditBox = document.getElementById("totalCredits");
const winningsBox = document.getElementById("winnings");
const fruitx = document.getElementById("fruit1");
const fruity = document.getElementById("fruit2");
const fruitz = document.getElementById("fruit3");
const txtMessage = document.getElementById("txtMessage");
const spin = document.getElementById("spin");
const credit = document.getElementById("credit");
const collect = document.getElementById("collect");

// add event listeners
credit.addEventListener("click", addCredit);
spin.addEventListener("click", fruitSpin);
collect.addEventListener("click", collectWinnings);

// declare images
let apple = "images/apple.png";
let banana = "images/banana.png";
let bar = "images/bar.png";
let cherry = "images/cherries.png"
let grape = "images/grapes.png";
let lemon = "images/lemon.png";
let melon = "images/melon.png";
let orange = "images/orange.png";

// on page load
let images = [apple, banana, bar, cherry, grape, lemon, melon, orange];
let randoma = Math.floor(Math.random() * 8);
let randomb = Math.floor(Math.random() * 8);
let randomc = Math.floor(Math.random() * 8);
fruitx.innerHTML = "<img src="+images[randoma]+">";
fruity.innerHTML = "<img src="+images[randomb]+">";
fruitz.innerHTML = "<img src="+images[randomc]+">";

window.onload=function() {
    document.getElementById("spin").disabled=true;
    document.getElementById("collect").disabled=true;
}


//functions

// add 1 credit
function addCredit() {
    creditBox.innerText -= -1;
    txtMessage.innerText = "+1 Credit";
    document.getElementById("spin").disabled=false;
    document.getElementById("collect").disabled=false;
}

// spin machine
function fruitSpin() {
    if(creditBox.innerText < 1) {
        txtMessage.innerText = "at least 1 credit needed to play";
    }

    else {
        creditBox.innerText -= 1;
        let randoma = Math.floor(Math.random() * 8);
        let randomb = Math.floor(Math.random() * 8);
        let randomc = Math.floor(Math.random() * 8);
        fruitx.innerHTML = "<img src="+images[randoma]+">";
        fruity.innerHTML = "<img src="+images[randomb]+">";
        fruitz.innerHTML = "<img src="+images[randomc]+">";
        txtMessage.innerText = "try again";

    if (randoma == randomb == randomc) {
        txtMessage.innerText = "+10 points";
        winningsBox.innerText -= -10;
        }

    if (randomb == randomc) {
        txtMessage.innerText = "+5 points";
        winningsBox.innerText -= -5;
    }
}}

function collectWinnings() {
    txtMessage.innerText = "collect winnings";
    if(winningsBox.innerText < 1){
        txtMessage.innerText = "spin to earn winnings!";
    }
    else {
        winningsBox.innerText = 0;
        txtMessage.innerText = "winnings have been collected";
    }
}