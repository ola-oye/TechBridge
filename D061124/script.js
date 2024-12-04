// print all even number between 1 - 100
let counter = 0;
for (let i = 1; i < 100; i++) {
  if (i % 2 === 0) {
    counter++;
  }
}
console.log(`The number of even number between 1 to 100 is ${counter}`); // The number of even number between 1 to 100 is 50

// Print Fizz for even and Buzz for odd number between 1 - 100
for (let j = 1; j <= 100; j++) {
  if (j % 2 === 0) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

// Multiplication table of any number
function multiplication(num1, num2) {
  for (let k = 0; k <= num2; k++) {
    console.log(`${num1} x ${k} =  ${num1 * k}`);
  }
}

multiplication(3, 10);

// program that encode an alphabet with corresponding alphabet in reverse order
function getKeyByValue(object, value) {
  for (let key in object) {
    if (object[key] === value) return key;
  }
}

let reversedWord = [];

function mapEngine(word, map) {
  for (i = 0; i <= word.length; i++) {
    if (Object.keys(map).includes(word[i])) {
      reversedWord.push(map[word[i]]);
    } else if (Object.values(map).includes(word[i])) {
      reversedWord.push(getKeyByValue(map, word[i]));
    } else {
      reversedWord.push(word[i]);
    }
  }
}

function alphabetmap(phrase) {
  phraseInLowerCase = phrase.toLowerCase();
  const map = {
    a: "z",
    b: "y",
    c: "x",
    d: "w",
    e: "v",
    f: "u",
    g: "t",
    h: "s",
    i: "r",
    j: "q",
    k: "p",
    l: "o",
    m: "n",
  };

  let wordList = phraseInLowerCase.split(" ");

  for (let item in wordList) {
    mapEngine(wordList[item], map);
  }
  console.log(reversedWord.join(" "));
}

alphabetmap("I am happy today!");

//Solution to RPSG functionality

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const printScore1 = document.getElementById("printScore1");
const printScore2 = document.getElementById("printScore2");
const printScore = document.getElementById("printScore");
const printCard = document.getElementById("printCard");
const printResult = document.getElementById("printResult");
const star = document.getElementById("star");
const immResult = document.getElementById("immResult");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const restart = document.querySelector(".restart");

let player1Score = 0;
let player2Score = 0;
let round = 5;

function gameOver() {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;

  if (player1Score > player2Score) {
    printResult.innerText = "You win the game!";
  } else if (player1Score < player2Score) {
    printResult.innerText = "You lose the game!";
  } else {
    printResult.innerText = "It's a draw!";
  }
}

function startGame() {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
  printCard.classList.add("hidden");
  printScore2.innerText = 0;
  printScore1.innerText = 0;

  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  player1Score = 0;
  player2Score = 0;
  round = 5;
  star.innerText = "*".repeat(round);
  inmmResult.innerText = "Start the game!";
}


function gameEngine(player1Choice) {
  const components = ["rock", "paper", "scissors"];
  let player2Choice = components[Math.floor(Math.random() * components.length)];

  printCard.classList.remove("hidden");

  if (player1Choice === player2Choice) {
    choice1.innerText = player1Choice;
    choice2.innerText = player2Choice;
    immResult.innerText = "It's a draw";
  } else if (
    (player1Choice === "rock" && player2Choice === "scissors") ||
    (player1Choice === "paper" && player2Choice === "rock") ||
    (player1Choice === "scissors" && player2Choice === "paper")
  ) {
    choice1.innerText = player1Choice;
    choice2.innerText = player2Choice;
    immResult.innerText = "You win!";
    player1Score++;
  } else {
    choice1.innerText = player1Choice;
    choice2.innerText = player2Choice;
    immResult.innerText = "You lose!";
    player2Score++;
  }
  printScore1.innerText = player1Score;
  printScore2.innerText = player2Score;
  round--;
  star.innerText = "*".repeat(round);

  if (round === 0) 
    gameOver();
}

rock.addEventListener("click", () => {
  gameEngine("rock");
});
paper.addEventListener("click", () => {
  gameEngine("paper");
});
scissors.addEventListener("click", () => {
  gameEngine("scissors");
});
restart.addEventListener("click", startGame);
