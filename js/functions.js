// Первая функция
function checkLengthString(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

console.log(checkLengthString('проверяемая строка', 18));

// Строка короче 20 символов
checkLengthString('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkLengthString('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkLengthString('проверяемая строка', 10); // false


// Вторая функция - первый вариант решения
function isReverse(string) {
  let revString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    revString += string[i];
  }
  return revString;
}
function isPolydrom(string) {
  string = string.replaceAll(' ', '').toLowerCase();
  revString = isReverse(string);
  if (revString === string) {
    return true;
  }
  return false;
}

console.log(isPolydrom('ДовОд '));

// Строка является палиндромом
isPolydrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPolydrom('ДовОд '); // true
// Это не палиндром
isPolydrom('Кекс'); // false
// Это палиндром
isPolydrom('Лёша на полке клопа нашёл '); // true


// Вторая функция - второй вариант решения
function isPolyndrom(string) {
  const cleaned = string.replaceAll(' ', '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');

  return cleaned === reversed;
}

console.log(isPolyndrom('Лёша на полке клопа нашёл '));

// Третья функция - до конца не решена!!!
function extractNumbers(str) {
  let numbers = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      numbers += str[i];
    }
  }
  return numbers;
}
console.log(extractNumbers('агент 007'));
