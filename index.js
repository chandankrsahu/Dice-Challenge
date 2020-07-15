
var x=Math.random();
x*=6;
x=Math.ceil(x);
var rimg="dice"+x+".png";
var rsrc="images/"+rimg;

document.querySelectorAll("img")[0].src = rsrc;
var y=Math.random();
y*=6;
y=Math.ceil(y);
var rimg1="dice"+y+".png";
var rsrc1="images/"+rimg1;

document.querySelectorAll("img")[1].src = rsrc1;

if(x===y)
document.querySelector("h1").innerHTML="Draw!";
else if(x>y)
document.querySelector("h1").innerHTML="Player1 Wins";
else 
document.querySelector("h1").innerHTML="Player2 Wins";




// if(x===2)
// document.querySelectorAll("img")[0].src = "images/dice2.png";
// if(x===3)
// document.querySelectorAll("img")[0].src = "images/dice3.png";
// if(x===4)
// document.querySelectorAll("img")[0].src = "images/dice4.png";
// if(x===5)
// document.querySelectorAll("img")[0].src = "images/dice5.png";
// if(x===6)
// document.querySelectorAll("img")[0].src = "images/dice6.png";

