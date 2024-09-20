console.log('#1. Пример ДЗ JavaScript')


// #1

let myNum = 10; // number
console.log(myNum);

let myStr = 'some string';    // string
console.log(myStr);


let myBool = true;           // boolean
console.log(myBool);

let myArr = [1, 2, 3, 4, 5]; // array (массив)
console.log(myArr);

let myObj = {
  first: 'First Name',
  last: "Last Name"
};                           // object
console.log(myObj);


// #2

let decimal2 = myNum.toFixed(2); // форматирование до двух знаков после запятой
console.log(decimal2);


// #3

let i = 13;
console.log(++i); // префиксный инкремент - увеличивает i до 14 и выводит
console.log(i++); // постфиксный инкремент - выводит 14, затем увеличивает i до 15
console.log(i); // проверка - выводит 15
console.log(--i); // префиксный декремент - уменьшает i до 14 и выводит
console.log(i--); // постфиксный декремент - выводит 14, затем уменьшает i до 13
console.log(i); // проверка - выводит 13


// #4

let myTest = 20;

myTest += myNum;
console.log(myTest);

myTest -= 5;
console.log(myTest);

myTest *= 2;
console.log(myTest);

myTest /= 5;
console.log(myTest);

myTest %= 3; 
console.log(myTest); // остаток от деления myTest на 3 (10 % 3 = 1)


// #5

const myPi = Math.PI;
console.log(myPi);

const myRound = Math.round(89.279); // округляет
console.log(myRound);

const myRandom = Math.random() * 10; 
console.log(myRandom);

const myPow = Math.pow(3, 5); // 3 в 5 степени
console.log(myPow);


// #6

let strObj = {
    str: "Мама мыла раму, рама мыла маму",
    length: "Мама мыла раму, рама мыла маму".length // ключ - показывает длину строки
};
console.log(strObj);


// #7

const isRamaPos = strObj.str.indexOf('рама'); // индекс 'рама' - на каком месте в строке находится подстрока
console.log(isRamaPos); // вывод числа места

const isRama = isRamaPos !== -1; // проверяет, не равно ли значение isRamaPos -1; если нет, то подстрока была найдена
console.log(isRama); // true - если 'рама' найдена, false - если не найдена


// #8

let strReplace = strObj.str.replace('мыла', 'моет').replace(/рама/i, 'Рама').replace('мыла', 'держит');
console.log(strReplace);


// #9

var someStr = 'some STRING';
var upperStr = someStr.toUpperCase();
console.log(upperStr);

var lowerStr = someStr.toLowerCase();
console.log(lowerStr);