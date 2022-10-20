export {};
//task1
const x = 20;
const y = 58;
const z = 42;
const task1: number = x + y + z;
console.log("task1 = " + task1);

//task2
const secinmin = 60;
const mininhour = 60;
const hourinat = 24;
const daysinyear = 356;
const myAge = 27;
const myAgeInSeconds = myAge * daysinyear * hourinat * mininhour * secinmin;
console.log("task2 = " + myAgeInSeconds);

//task3
const count = 42;
const userName = "42";
const countStr1 = String(count);
const countStr2 = `${count}`;
const userNameNum1 = +userName;
const userNameNum2 = Number(userName);
console.log(
    "task3 = " + typeof countStr1 + " " + typeof countStr2 + " " + typeof userNameNum1 + " " + typeof userNameNum2,
);

//task4
const a = 1;
const b = 2;
const c = "белых медведей";
console.log("task4 = " + a + b + " " + c);

//task5
const word1 = "доступ";
const word2 = "морпех";
const word3 = "наледь";
const word4 = "попрек";
const word5 = "рубило";

const length1 = word1.length;
const length2 = word2.length;
const length3 = word3.length;
const length4 = word4.length;
const length5 = word5.length;

const lengthWords = length1 + length2 + length3 + length4 + length5;
console.log("task5 = " + lengthWords);

//task6
const variable1 = 123;
const variable2 = "home";
const variable3 = false;
console.log("task6 = " + "Variable: " + variable1 + " have type: " + typeof variable1);
console.log("task6 = " + "Variable: " + variable2 + " have type: " + typeof variable2);
console.log("task6 = " + "Variable: " + variable3 + " have type: " + typeof variable3);

//task7
const var1 = "true";
const var2 = false;
const var3 = 17;
const var4 = undefined;
const var5 = null;
console.log("task7 = " + typeof var1 + " " + typeof var2 + " " + typeof var3 + " " + typeof var4 + " " + typeof var5);

//task8
const height = 15;
const width = 20;

if (height > width) {
    console.log("task8 = " + height);
} else {
    console.log("task8 = " + width);
}

//task9
console.log("task9");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//task10
const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = false;

if (key && documents && pen) {
    if (apple || orange) {
        const shouldGoToWork = "you can go to work";
        console.log("task10 " + shouldGoToWork);
    } else {
        const shouldGoToWork = "you can't go to work";
        console.log("task10 " + shouldGoToWork);
    }
}

//task11
console.log("task11");
const task11 = 99;

if (task11 % 5 === 0 && task11 % 3 === 0) {
    console.log("FizBuz");
} else if (task11 % 5 === 0) {
    console.log("Fiz");
} else if (task11 % 3 === 0) {
    console.log("Buz");
}

//task12
console.log("task12");
const age = 16;
if (age >= 18) {
    console.log(`Попей пивка`);
} else if (16 <= age && age < 18) {
    console.log(`Можешь выкурить сигаретку, только маме не говори`);
    console.log(`Пей колу`);
} else {
    console.log(`Пей колу`);
}

//task13
console.log(`task13`);
const south = "юг";
const north = "север";
const west = "запад";
const east = "восток";

let myChoice = "";
myChoice = east;
switch (myChoice) {
    case south:
        console.log(myChoice + ` на юг пойдешь счастье найдешь`);
        break;
    case north:
        console.log(myChoice + ` на север пойдешь много денег найдешь`);
        break;
    case west:
        console.log(myChoice + ` на запад пойдешь верного друга найдешь`);
        break;
    case east:
        console.log(myChoice + ` на восток пойдешь разработчиком станешь`);
        break;
}

//Advanced task1
let aa = 4;
let bb = 3;

aa += bb;
bb = aa - bb;
aa -= bb;
console.log(`Advanced task1 a=` + aa + " b=" + bb);

//Advanced task2
console.log(`Advanced task2`);
const char = "#";
const loopCount = 7;

for (let i = 1; i < loopCount; i++) {
    let charsave = "";
    for (let y = 0; y < i; y++) {
        charsave += char;
    }
    console.log(charsave);
}
