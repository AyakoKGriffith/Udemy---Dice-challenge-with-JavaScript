//Dice 1//
var randomNum1=(Math.floor(Math.random()*6))+1;
var randomeImage1="images/dice" + randomNum1 + ".png"
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomeImage1);

//Dice 2//
var randomNum2=(Math.floor(Math.random()*6))+1;
var randomeImage2="images/dice" + randomNum2 + ".png"
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomeImage2);

//Change title based on dice challenge result//
if (randomNum1===randomNum2){
    document.querySelector("h1").innerHTML="Draw";
} else if (randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
} else {
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
} 
