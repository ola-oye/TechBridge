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

// Multiple table of any number
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

//Solution to RPG functionality

function singlePlayer(player1, score) {
  let player = prompt("Enter your choice: rock, paper, or scissors");
  const components = ["rock", "paper", "scissors"];
  let choice = components[Math.floor(Math.random() * components.length)];

  if (player === choice) {
    console.log("It's a draw");
  } else if (
    (player === "rock" && choice === "scissors") ||
    (player === "paper" && choice === "rock") ||
    (player === "scissors" && choice === "paper")
  ) {
    console.log("You win!");
    score += 1;
  } else {
    console.log("You lose!");
  }
}

let score = 0;
let counter = 0;
while (true) {
  gameEngine(playerChoice, scores);
  if (score === 3 && counter < 6) {
    console.log("You win the game with ease!");
    break;
  }else if (score === 3 && counter >= 6) {
    console.log("You lose the game!");
    break;
  } 
  counter++;
}
// function gameEngine(player1 = playerChoice, player2= choice) {
//   if (player1 === player2) {
//     console.log("It's a draw");
//   } else if (
//     (player1 === "rock" && player2 === "scissors") ||
//     (player1 === "paper" && player2 === "rock") ||
//     (player1 === "scissors" && player2 === "paper")
//   ) {
//     console.log("You win!");
//     score += 1;
//   } else {
//     console.log("You lose!");
//   }
// }
