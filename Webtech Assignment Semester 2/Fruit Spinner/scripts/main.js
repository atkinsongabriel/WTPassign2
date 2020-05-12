// declaring constants
const creditBox = document.getElementById("totalCredits");
const winningsBox = document.getElementById("winnings");
const fruita = document.getElementById("fruit1");
const fruitb = document.getElementById("fruit2");
const fruitc = document.getElementById("fruit3");
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
let cherries = "images/cherries.png"
let grapes = "images/grapes.png";
let lemon = "images/lemon.png";
let melon = "images/melon.png";
let orange = "images/orange.png";
let images = [apple, banana, bar, cherries, grapes, lemon, melon, orange];

// on page load, randomise 3 images
let randoma = Math.floor(Math.random() * 8);
let randomb = Math.floor(Math.random() * 8);
let randomc = Math.floor(Math.random() * 8);
fruita.innerHTML = "<img src="+images[randoma]+">";
fruitb.innerHTML = "<img src="+images[randomb]+">";
fruitc.innerHTML = "<img src="+images[randomc]+">";

//disable spin and collect on load
window.onload=function() {
    document.getElementById("spin").disabled=true;
    document.getElementById("collect").disabled=true;
}


//functions

// add 1 credit
function addCredit() {
    creditBox.innerText -= -1;
    txtMessage.innerText = "+1 Credit";
    //enable spin and collect
    document.getElementById("spin").disabled=false;
    document.getElementById("collect").disabled=false;
}

// spin machine
function fruitSpin() {
    // if no credits
    if(creditBox.innerText < 1) {
        txtMessage.innerText = "at least 1 credit needed to play";
    }

    // if credits are more than 1 spin spinner
    else {
        creditBox.innerText -= 1;
        let randoma = Math.floor(Math.random() * 8);
        let randomb = Math.floor(Math.random() * 8);
        let randomc = Math.floor(Math.random() * 8);
        fruita.innerHTML = "<img src="+images[randoma]+">";
        fruitb.innerHTML = "<img src="+images[randomb]+">";
        fruitc.innerHTML = "<img src="+images[randomc]+">";
        txtMessage.innerText = "try again";

    //if last 2 images match, add 5 points
    if (randomb == randomc) {
        txtMessage.innerText = "+5 points";
        winningsBox.innerText -= -5;
    }

    //if all images match, add 10 points
    else if (randoma == randomb == randomc) {
        txtMessage.innerText = "+10 points";
        winningsBox.innerText -= -10;
        }
    }
}

function collectWinnings() {
    // if no winnings
    txtMessage.innerText = "collect winnings";
    if(winningsBox.innerText < 1){
        txtMessage.innerText = "spin to earn winnings!";
    }
    // if winnings to be collected, collect winnings
    else {
        winningsBox.innerText = 0;
        txtMessage.innerText = "winnings have been collected";
    }
}