//get references to interactive elements
const imgFruit = document.getElementById("imgfruit");
const addCredit = document.getElementById("credit");
const txtWinnings = document.getElementById("winnings");
const totalCredit = document.getElementById("totalCredits");
const reset = document.getElementById("reset");
const spin = document.getElementById("spin");
const message = document.getElementById("message");
const spinClicked = document.getElementById("spin");

//add event listeners

//when page loaded
//when roll button clicked

var defaultCredit = 0;

//when credit clicked
addCredit.onclick = function() {

// Add one
defaultCredit = defaultCredit + 1;
totalCredit.innerText = parseFloat(defaultCredit);
    
//when reset button clicked

var randomFruit1 = new Array("images/apple.png","images/banana.png","images/bar.png","images/cherries.png","images/grapes.png","images/lemon.png", "images/melon.png", "images/orange.png");
var randomFruit2 = new Array("images/apple.png","images/banana.png","images/bar.png","images/cherries.png","images/grapes.png","images/lemon.png", "images/melon.png", "images/orange.png");
var randomFruit3 = new Array("images/apple.png","images/banana.png","images/bar.png","images/cherries.png","images/grapes.png","images/lemon.png", "images/melon.png", "images/orange.png");

if (defaultCredit >= 1) {
spin.onclick = function(){
    var randomNum = Math.floor(Math.random() * randomFruit1.length);
    document.getElementById("fruit1").src = randomFruit1[randomNum]; 

    var randomNum = Math.floor(Math.random() * randomFruit2.length);
    document.getElementById("fruit2").src = randomFruit2[randomNum]; 

    var randomNum = Math.floor(Math.random() * randomFruit3.length);
    document.getElementById("fruit3").src = randomFruit3[randomNum]; 
    var takeAway = parseFloat(defaultCredit) - 1;
    totalCredit.innerText = parseFloat(takeAway);
}

if (defaultCredit < 1) {
    message.innerText = "try again";
}
}}