// HEADER

const modal = document.getElementById("modal");
const thankYouModal = document.getElementById("thankYouModal");
const submitButton = document.getElementById("submitName");
const userNameInput = document.getElementById("userName");
const output = document.getElementById("output");

window.onload = () => {
  modal.style.display = "flex";
};

function handleUserNameInput() {
  const userName = userNameInput.value.trim();
  if (userName) {
    output.textContent = `Привіт, ${userName}!`;
    modal.style.display = "none";
    openThankYouModal();
  } else {
    alert("Будь ласка, введіть своє ім’я!");
  }
}

function openThankYouModal() {
  thankYouModal.style.display = "flex";
  setTimeout(() => {
    thankYouModal.style.display = "none";
  }, 3000);
}

submitButton.addEventListener("click", handleUserNameInput);
userNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleUserNameInput();
  }
});


// FOOTER

const thankYouModalFooter = document.getElementById('thankYouModal'); 
const submitButtonFooter = document.querySelector('.footer__content-subscribe-main-button'); 
const userNameInputFooter = document.querySelector('.footer__content-subscribe-main-email'); 

function openThankYouModal() {
  thankYouModalFooter.style.display = "flex"; 
  setTimeout(() => {
    thankYouModalFooter.style.display = "none"; 
  }, 3000);
}

submitButtonFooter.addEventListener("click", (event) => {
  event.preventDefault(); 
  openThankYouModal(); 
});

userNameInputFooter.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    openThankYouModal(); 
  }
});

// BIRTHDAY

let birthday = document.querySelector(".birthday__content-play-year");
let birthdayText = document.querySelector(".birthday__content-play-text");
let birthdayButton = document.querySelector(".birthday-group-icon-search");

function checkYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    birthdayText.textContent = "Ви народилися у високосний рік!";
    birthdayText.style.color = "green";
  } else {
    birthdayText.textContent = "Ви народилися у не високосний рік!";
    birthdayText.style.color = "red";
  }
}

birthdayButton.addEventListener("click", () => {
  let year = Number(birthday.value);

  if (year < 1900 || year > 2025 || isNaN(year)) {
    birthdayText.textContent =
      "Будь ласка, введіть рік у діапазоні від 1900 до 2025!";
    birthdayText.style.color = "orange";
    return;
  }

  checkYear(year);
});

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
    resultElement.Style.color = "green";
  } else {
    resultElement.textContent = `Ви програли. Комп’ютер загадав число ${secretNumber}.`;
    resultElement.Style.color = "red";
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

  document.querySelector(
    ".rock-paper-scissor__content-play-down-button"
  ).textContent = `Комп'ютер обрав: ${computerChoice}`;

  switch (true) {
    case userChoice === computerChoice:
      return "Нічия!";

    case userChoice === "камінь" && computerChoice === "ножиці":
    case userChoice === "ножиці" && computerChoice === "папір":
    case userChoice === "папір" && computerChoice === "камінь":
      userScore++;
      return "Ти виграв!";

    default:
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

let textResult = document.querySelector(".calculator__content-play-resault");
const decisionButton = document.getElementById("calculator-decision");

decisionButton.addEventListener("click", () => {
  let firstNumber = document.getElementById("calculator-first-number");
  let secondNumber = document.getElementById("calculator-second-number");
  let operator = document.querySelector(
    'input[name="calculator-operator"]:checked'
  );
  if (firstNumber && secondNumber && operator) {
    calculator(firstNumber.value, operator.value, secondNumber.value);
  } else {
    alert("Будь ласка, заповніть всі поля введеня.");
  }
});

function calculator(firstNum, operator, secondNum) {
  let result;
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  switch (operator) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "/":
      result = secondNum !== 0 ? firstNum / secondNum : "ПОМИЛКА";
      break;
    default:
      result = "Невідомий знак";
      break;
  }
  
  if (typeof result === "number") {
    if (result % 1 !== 0) {
      result = result.toFixed(3);
    } else {
      result = result.toString();
    }
  }

  textResult.textContent = result;
}


// CALCULATOR-TIME

const time = document.querySelector("#time");
const timeButton = document.querySelector(".calculator-time-group-icon-search");
const timeResault = document.querySelector('.calculator-time__content-play-text');

timeButton.addEventListener("click", (event) => {
  event.preventDefault(); 

  const totalMinutes = parseInt(time.value);

  if (isNaN(totalMinutes) || totalMinutes < 0) {
    timeResault.textContent = "Будь ласка, введіть коректне число хвилин!";
    return;
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  timeResault.textContent = `${hours}:${minutes}`;
});

// FOOTBALL

const field = document.getElementById("field");
const ball = document.getElementById("ball");

function moveBall(event) {
  const fieldRect = field.getBoundingClientRect();
  const ballSize = ball.offsetWidth;

  let x = event.clientX - fieldRect.left - ballSize / 2;
  let y = event.clientY - fieldRect.top - ballSize / 2;

  x = Math.max(0, Math.min(x, fieldRect.width - ballSize));
  y = Math.max(0, Math.min(y, fieldRect.height - ballSize));

  ball.style.transform = `translate(${x}px, ${y}px)`;
}

field.addEventListener("click", moveBall);

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
  gap: "30px",
});

mySlider.mount();

// SCIENTISTS

const scientists = [
  { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
  { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
  { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
  { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
  { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
  { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
  { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
  { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
  { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
  { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
  { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
  { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 },
];

const photos = document.querySelectorAll(".scientist");
const container = document.querySelector(".scientists__content-photos");

const initialScientistsOrder = [...scientists];

function resetStyles() {
  photos.forEach((photo) => {
    photo.style.border = "none";
  });

  reorderScientists(initialScientistsOrder);
}

function getScientistsBornIn19thCentury() {
  resetStyles();
  const result = scientists.filter(
    (sci) => sci.born >= 1801 && sci.born <= 1900
  );
  console.log("Вчені, які народилися у 19 столітті:", result);
  highlightScientists(result, "green");
}

function sortScientistsAlphabetically() {
  resetStyles();
  const sorted = [...scientists].sort((a, b) =>
    a.surname.localeCompare(b.surname)
  );
  console.log("Сортування по алфавіту:", sorted);
  reorderScientists(sorted);
}

function sortScientistsByLifespan() {
  resetStyles();
  const sorted = [...scientists].sort(
    (a, b) => b.dead - b.born - (a.dead - a.born)
  );
  console.log("Сортування по тривалості життя:", sorted);
  reorderScientists(sorted);
}

function removeScientistsBornIn15To17Century() {
  resetStyles();
  const filtered = scientists.filter((sci) => sci.born >= 1801);
  console.log("Вчені без 15-17 століть:", filtered);
  reorderScientists(filtered);
}

function getLatestBornScientist() {
  resetStyles();
  const latest = scientists.reduce((latest, sci) =>
    sci.born > latest.born ? sci : latest
  );
  console.log("Наймолодший за народженням вчений:", latest);
  highlightScientists([latest], "red");
}

function getBirthYearOfEinstein() {
  resetStyles();
  const einstein = scientists.find(
    (sci) => sci.name === "Albert" && sci.surname === "Einstein"
  );
  console.log("Рік народження Альберта Ейнштейна:", einstein?.born);
}

function getScientistsWithSurnameStartingWithC() {
  resetStyles();
  const filtered = scientists.filter((sci) => sci.surname.startsWith("C"));
  console.log("Вчені з прізвищем на 'C':", filtered);
  highlightScientists(filtered, "green");
}

function removeScientistsWithNameStartingWithA() {
  resetStyles();
  const filtered = scientists.filter((sci) => !sci.name.startsWith("A"));
  console.log("Вчені без імен на 'A':", filtered);
  reorderScientists(filtered);
}

function getScientistsWithLongestAndShortestLifespan() {
  resetStyles();
  const longest = scientists.reduce((max, sci) =>
    sci.dead - sci.born > max.dead - max.born ? sci : max
  );
  const shortest = scientists.reduce((min, sci) =>
    sci.dead - sci.born < min.dead - min.born ? sci : min
  );
  console.log("Найдовше прожив:", longest);
  console.log("Найменше прожив:", shortest);
  highlightScientists([longest, shortest], "red");
}

function getScientistsWithMatchingInitials() {
  resetStyles();
  const filtered = scientists.filter((sci) => sci.name[0] === sci.surname[0]);
  console.log("Вчені з однаковими ініціалами:", filtered);
  highlightScientists(filtered, "green");
}

function highlightScientists(selectedScientists, color) {
  photos.forEach((photo, index) => {
    const id = scientists[index].id;
    if (selectedScientists.find((sci) => sci.id === id)) {
      photo.style.border = `3px solid ${color}`;
    }
  });
}

function reorderScientists(orderedScientists) {
  const ids = orderedScientists.map((sci) => sci.id);
  const sortedPhotos = Array.from(photos).sort((a, b) => {
    const idA = scientists[Array.from(photos).indexOf(a)].id;
    const idB = scientists[Array.from(photos).indexOf(b)].id;
    return ids.indexOf(idA) - ids.indexOf(idB);
  });

  sortedPhotos.forEach((photo) => container.appendChild(photo));
}

document
  .querySelectorAll(".scientists__content-buttons-first-button")[0]
  .addEventListener("click", getScientistsBornIn19thCentury);
document
  .querySelectorAll(".scientists__content-buttons-first-button")[1]
  .addEventListener("click", sortScientistsAlphabetically);
document
  .querySelectorAll(".scientists__content-buttons-first-button")[2]
  .addEventListener("click", sortScientistsByLifespan);
document
  .querySelectorAll(".scientists__content-buttons-first-button")[3]
  .addEventListener("click", getLatestBornScientist);
document
  .querySelectorAll(".scientists__content-buttons-second-button")[0]
  .addEventListener("click", getBirthYearOfEinstein);
document
  .querySelectorAll(".scientists__content-buttons-second-button")[1]
  .addEventListener("click", getScientistsWithSurnameStartingWithC);
document
  .querySelectorAll(".scientists__content-buttons-second-button")[2]
  .addEventListener("click", removeScientistsWithNameStartingWithA);
document
  .querySelectorAll(".scientists__content-buttons-second-button")[3]
  .addEventListener("click", getScientistsWithLongestAndShortestLifespan);
document
  .querySelectorAll(".scientists__content-buttons-third-button")[0]
  .addEventListener("click", getScientistsWithMatchingInitials);

// FOOTER

const emailInput = document.querySelector(".footer__content-subscribe-main-email");
const errorMessage = document.createElement("span");

errorMessage.style.color = "red";
errorMessage.style.fontSize = "12px";
errorMessage.style.display = "none"; 
emailInput.parentNode.insertBefore(errorMessage, emailInput.nextSibling);

emailInput.addEventListener("blur", () => {
  const emailValue = emailInput.value;

  if (!emailValue.includes("@")) {
    errorMessage.textContent = "Електронна адреса повинна містити символ '@'";
    errorMessage.style.display = "block"; 
  } else {
    errorMessage.style.display = "none";
  }
});
