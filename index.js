//alert("Hello");

var randomNumber = Math.random()*6;
randomNumber = Math.floor(randomNumber)+1;

var randomDiceImage = "/dice"+randomNumber+ ".png";
//alert(randomDiceImage);

document.querySelector(".img1").setAttribute("src",randomDiceImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "/dice"+randomNumber2+ ".png";

document.querySelector(".img2").setAttribute("src",randomDiceImage2);

//alert("hi");
if(randomNumber > randomNumber2)
{
    document.querySelector("h1").textContent="Player 1 wins!";
    //alert("hi1");
}

else if(randomNumber < randomNumber2)
{
    document.querySelector("h1").textContent="Player 2 wins!";
   // alert("hi2");
}
else
{
    document.querySelector("h1").textContent="Match Draw...";
   
}