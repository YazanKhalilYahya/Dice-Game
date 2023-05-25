// generate two random numbers between 1 and 6
// create random image resources
var randomNum1 = Math.floor((Math.random() * 6) + 1);
var randomNum2 = Math.floor((Math.random() * 6) + 1);

// create random image resources
var randomImgSrc1 = "images/dice" + randomNum1 + ".png";
var randomImgSrc2 = "images/dice" + randomNum2 + ".png";

// change the src attribute of the images
// first img
var changeImgSrc1 = document.querySelector(".img1").setAttribute("src", randomImgSrc1);

// second img
var changeImgSrc1 = document.querySelector(".img2").setAttribute("src", randomImgSrc2);

// Change title
if (randomNum1 > randomNum2){
  document.querySelector("h1").textContent = "Player 1 Won 😁!"
} else if( randomNum1 < randomNum2){
  document.querySelector("h1").textContent = "Player 2 Won 👌!"
} else{
  document.querySelector("h1").textContent = "Draw 😒!"
}
