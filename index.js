function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  return words.length * pricePerWord;
}

function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

function formatString(string) {
  if (string.length <= 40) {
    return string;
  }
  return string.slice(0, 40) + "...";
}

function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

let input;
const numbers = [];
let total = 0;

for (;;) {
  input = prompt("Введіть число");

  if (input === null) {
    break;
  }

  const number = Number(input);

  if (Number.isNaN(number)) {
    alert("Було введено не число, попробуйте ще раз");
    continue;
  }

  numbers.push(number);
}

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }

  console.log(`Загальна сума чисел дорівнює ${total}`);
}

function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }

  if (!isLoginUnique(allLogins, login)) {
    return "Такий логін уже використовується!";
  }

  allLogins.push(login);
  return "Логін успішно доданий!";
}

const logins = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

logItems(["Mango", "Poly", "Ajax"]);

console.log(calculateEngravingPrice("JavaScript is awesome", 10));

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(checkForSpam("Get best sale offers now!"));

console.log(addLogin(logins, "NewUser"));
