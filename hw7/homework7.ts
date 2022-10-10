export {};
//task1
console.log("task1");
const colors = ["red", "green", "blue"];
console.log(colors.length);

//task2
console.log("task2");
const animals = ["monkey", "dog", "cat"];
console.log(animals[animals.length - 1]);

//task3
console.log("task3");
let numbers = [5, 43, 63, 23, 90];
numbers.splice(0, numbers.length);
console.log(numbers);
numbers = [5, 43, 63, 23, 90];
numbers = numbers.slice(numbers.length);
console.log(numbers);

//task4
console.log("task4");
const students = ["Polina", "Dasha", "Masha"];
students.pop();
students.push("Borya");
students.shift();
students.unshift("Andrey");
console.log(students);

//task5
console.log("task5");
const cats = ["Gachito", "Tom", "Batman"];
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}
for (const cat of cats) {
    console.log(cat);
}
//task6
console.log("task6");
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
for (const num of oddNumbers) {
    evenNumbers.push(num);
}
console.log(evenNumbers);
console.log(evenNumbers.indexOf(8));

//task7
console.log("task7");
const binary = [0, 0, 0, 0];
console.log(binary.join("1"));

//task1A
console.log("task1A");
const MyWord = "Вика";
function task1(word: string): boolean {
    const word0 = word.toLowerCase();
    const Arr = word0.split("");
    const Arr0 = JSON.parse(JSON.stringify(Arr));
    const ArrReverse = Arr0.reverse();
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] !== ArrReverse[i]) {
            return false;
        }
    }
    return true;
}
if (task1(MyWord)) {
    console.log(MyWord + " - это палиндром");
} else {
    console.log(MyWord + " - это НЕ палиндром");
}

//task2A
console.log("task2A");
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];
let sum = 0;
let count = 0;
for (const mat of matrix) {
    for (const rix of mat) {
        count += 1;
        sum += rix;
    }
}
console.log(sum / count);

//task3A
console.log("task3A");
const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
const arr1 = [];
const arr2 = [];
for (const mi of mixedNumbers) {
    if (mi >= 0) {
        arr1.push(mi);
    } else {
        arr2.push(mi);
    }
}
console.log(arr1, arr2);

//task4A
console.log("task4A");
const randomArr = [];
const newArr = [];
const min = 5;
const max = 100;
const arrLenght = Math.floor(Math.random() * (max - min)) + min;
for (let i = 0; i < arrLenght; i++) {
    const newNumber = Math.floor(Math.random() * (max - min)) + min;
    randomArr.push(newNumber);
}
console.log(randomArr);
for (const ar of randomArr) {
    const ar3 = ar ** 3;
    newArr.push(ar3);
}
console.log(newArr);
