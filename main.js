// HEADER

// BIRTHDAY

let birthday = document.querySelector(".birthday__content-play-year");
let birthdayText = document.querySelector(".birthday__content-play-text");
let birthdayButton = document.querySelector(".birthday-group-icon-search");
function checkYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) === true) {
        birthdayText.textContent = 'Ви народилися у високосний рік!';
        birthdayText.style.color = 'green'
    } else {
        birthdayText.textContent = 'Ви народилися у не високосний рік!';
        birthdayText.style.color = 'red'
    }
}
birthdayButton.addEventListener("click", () => {
    let year = Number(birthday.value);
    checkYear(year);
})

// COMPUTER-NUMBER

function checkGuess() {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  const guessInput = document.getElementById("guess");
  const userGuess = parseInt(guessInput.value);
  const resultElement = document.getElementById("number-result");

  if (isNaN(userGuess)) {
    resultElement.textContent = "Будь ласка, введіть число!";
  } else if (userGuess === secretNumber) {
    resultElement.textContent = `Вітаю! Ви вгадали число ${secretNumber}!`;
    resultElement.Style.color = 'green'
  } else {
    resultElement.textContent = `Ви програли. Комп’ютер загадав число ${secretNumber}.`;
    resultElement.Style.color = 'red'
  }
}

// ROCK-PAPER-SCISSOR

const choices = ["камінь", "ножиці", "папір"];
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(userChoice) {
  const computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    return "Нічия!";
  } else if (
    (userChoice === "камінь" && computerChoice === "ножиці") ||
    (userChoice === "ножиці" && computerChoice === "папір") ||
    (userChoice === "папір" && computerChoice === "камінь")
  ) {
    userScore++;
    return "Ти виграв!";
  } else {
    computerScore++;
    return "Комп'ютер виграв!";
  }
}

function playGame(userChoice) {
  const result = playRound(userChoice);

  document.getElementById("result").textContent = result;
  document.getElementById("userScore").textContent = userScore;
  document.getElementById("computerScore").textContent = computerScore;
}

// CALCULATOR

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  const resultElement = document.getElementById("calculator-result");

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Ділення на нуль неможливе";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = "Невідомий оператор";
  }

  resultElement.textContent = `Результат: ${num1} ${operator} ${num2} = ${result}`;
}

// CALCULATOR-TIME

// FOOTBALL

// THREE-NUMBER

let numberFirst = document.getElementById("three-number1");
let numberSecond = document.getElementById("three-number2");
let numberThird = document.getElementById("three-number3");
let text = document.getElementById("three-number-result");

function maxNumberFunc(first, second, third) {
  let maxNumber = Math.max(
    Number(first.value),
    Number(second.value),
    Number(third.value)
  );
  text.textContent = `Найбільше число, яке ви ввели - (${maxNumber})`;
}
[numberFirst, numberSecond, numberThird].forEach((inputField) => {
  inputField.addEventListener("input", () => {
    maxNumberFunc(numberFirst, numberSecond, numberThird);
  });
});

// TEAM

const mySlider = new Splide("#mySlider", {
  perPage: 1,
  gap: "30px"
});

mySlider.mount();

// SCIENTISTS
