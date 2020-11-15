function roleDice(){
    var dices = document.querySelectorAll(".dice img");
    console.log(dices)
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    dices[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    dices[1].setAttribute("src", "./images/dice" + randomNumber2 + ".png");


    console.log(dices[0])
    console.log(dices[1])


    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    }
}