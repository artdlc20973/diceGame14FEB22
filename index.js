//PLAYER ONE INFORMATION (LONGER CODE)
let randomNum1 = Math.floor(Math.random() * 6) + 1; // numbers 1-6
let randomDiceImage = "dice" + randomNum1 + ".png"; //dice1.png - dice6.png
let randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//PLAYER TWO INFORMATION (SHORTER CODE)
let randomNum2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNum2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//PLAYER ONE AND TWO WINS
if(randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Player 1 WINS.!!🚩🏅"
} else if (randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML = "Player 2 WINS.!!🚩🏆"
} else {
  document.querySelector("h1").innerHTML = "It's a DRAW..!!🏁"
}