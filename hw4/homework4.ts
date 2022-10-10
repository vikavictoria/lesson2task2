export {};
//task 1
console.log("task 1");
const MyName = "Victoria Shutko";

for (let i = 1; i < 6; i++) {
    if (i % 2 == 0) {
        console.log("Привет " + MyName.toLowerCase());
    } else {
        console.log("Привет " + MyName.toUpperCase());
    }
}
console.log("");

//task2
console.log("task 2");

const myStr = "я учу typescript!";
const myWord = "я";
if (myStr.includes(myWord)) {
    console.log(myStr.indexOf("учу"));
} else {
    console.log("Данной подстроки нет");
}
console.log("");

//task3
console.log("task 3");

const str = "Дана произвольная строка";
const symbolPos = 22;
if (symbolPos > str.length) {
    console.log("Вы вышли за границу строки");
} else {
    console.log("символ номер " + symbolPos + " это символ " + str.charAt(symbolPos));
}
console.log("");

////task4
console.log("task 4");

const str1 = "Дана произвольная строка.";
if (str1.endsWith(".")) {
    console.log("Данное предложение закончено");
} else {
    console.log("В конце предложения не хватает точки");
}
console.log("");

////task5
console.log("task 5");
//беру эту строку из таска 2
console.log(myStr.slice(2, 5));
console.log(myStr.substring(6, 16));
console.log("");

////task6
console.log("task 6");
//беру эту строку из таска 2
console.log(myStr.split(" "));
console.log("");

////task7
console.log("task 7");
const myStr1 = "                я учу typescript!                ";
console.log(myStr1.trim());
console.log("");

////task8
console.log("task 8");
const num = 8.829734872948;
console.log(num.toFixed(3));
console.log("");

////task9
console.log("task 9");

const myNum = 12856.415451539999;

if (Number.isInteger(myNum)) {
    console.log(myNum);
} else {
    console.log(Math.round(myNum));
}
console.log("");

////task10
console.log("task 10");
const myNum1 = 666.9999;
console.log(Math.floor(myNum1));
console.log(Math.ceil(myNum1));
console.log(Math.round(myNum1));
console.log("");

////task11
console.log("task 11");
const myNum2 = 29;
console.log(Math.pow(myNum2, 2));
console.log("");

////task12
console.log("task 12");
const min = 333;
const max = 666;
const res = Math.floor(Math.random() * (max - min) + min);
console.log(res);
console.log("");

////task13
console.log("task 13");
//беру аргументы фунции из таска 12
const res1 = Math.random() * (max - min) + min;
console.log(res1);
console.log("");

////task14
console.log("task 14");
const date: Date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const day = date.getDate();
const date0 = month + "/" + year + "/" + day;

console.log("текущая дата:  " + date0 + ". Текущее время " + date.toLocaleTimeString());
