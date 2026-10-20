
let imageP = document.getElementById("imageP");
let imageC =document.getElementById("imageC")
let playerChoice ="q";
let computerChoice;

function select() {

    playerChoice = document.getElementById("select").value;

    if (playerChoice) {
        imageP.src = `static/images/${playerChoice}.png`;
    } else {
        imageP.src = "static/images/q.png";
    }
}

function play() {

    let choices = ["stone", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];

    imageC.src = `static/images/${computerChoice}.png`;

    let resultDiv = document.getElementById("result");
    let message = "";

    if (playerChoice === computerChoice) {
        message = "תוצאה: תיקו! 🤝";
    } else if (
        (playerChoice === "stone" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "stone") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        message = "תוצאה: כל הכבוד, ניצחת! 🎉";
    } else {
        message = "תוצאה: המחשב ניצח! 🤖";
    }

    resultDiv.innerHTML = message;
}