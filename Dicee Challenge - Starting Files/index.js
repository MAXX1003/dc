var randomnumber1 = Math.random();
randomnumber1 = randomnumber1*6
randomnumber1 = Math.floor(randomnumber1)+1;
var randomdice = "images/"+"dice"+randomnumber1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdice)

var randomnumber2 = Math.random();
randomnumber2 = randomnumber2*6
randomnumber2 = Math.floor(randomnumber2)+1;
var randomdice2 = "images/"+"dice"+randomnumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdice2)

if(randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML = "PLAYER 1 WINS!!!";
}
else if (randomnumber1 < randomnumber2) {
  document.querySelector("h1").innerHTML = "PLAYER 2 WINS!!!";
}
else{
  document.querySelector("h1").innerHTML = "ITS A TIE!!!";
}
