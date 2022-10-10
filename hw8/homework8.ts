export {};
//task1
console.log("task1");
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach((value: number, index: number, array: number[]) => {
    console.log(`value ==== ${value}`);
});
console.log("");
fibonacci.forEach(function (value: number, index: number, array: number[]) {
    console.log(`value ==== ${value}`);
});

//task2
console.log("task2");
const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
const task2: string[] = users.map((value: string, index: number, array: string[]) => {
    return `member ${index + 1}: ${value}`;
});
console.log(task2);
console.log("");
const task22: string[] = users.map(function (value: string, index: number, array: string[]) {
    return `member ${index + 1}: ${value}`;
});
console.log(task22);
//task3
console.log("task3");
const numbers = [7, -4, 32, -90, 54, 32, -21];
const task3: number[] = numbers.filter((value: number) => value >= 0);
console.log(task3);
const task33: number[] = numbers.filter(function (value: number) {
    return value >= 0;
});
console.log(task33);

//task4
console.log("task4");
//массив из первого таска
const result = fibonacci.reduce((sum: number, currentValue: number) => sum + currentValue);
console.log(result);
const result1 = fibonacci.reduce(function (sum: number, currentValue: number) {
    return sum + currentValue;
});
console.log(result1);

//task5
console.log("task5");
const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const res = numbers1.find((value: number) => value % 2 === 0);
console.log(res);

//task6
console.log("task6");
const numbers2 = [3, 5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const task6: boolean = numbers2.some((value: number) => value % 3 === 0 && value % 5 === 0);
console.log(task6);
const numbers3 = [3, 15, 5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const task61: boolean = numbers3.some(function (value: number) {
    return value % 3 === 0 && value % 5 === 0;
});
console.log(task61);

//task7
console.log("task7");
const task7: boolean = numbers3.every((value: number) => {
    let value1 = value ** 2;
    let sum = 0;
    let x = String(value1);
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
    if (sum % 2 === 0) {
        return true;
    } else {
        return false;
    }
});

console.log(task7);
const numbers4 = [2, 2];
const task71: boolean = numbers4.every(function (value: number) {
    let value1 = value ** 2;
    let sum = 0;
    let x = String(value1);
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
    if (sum % 2 === 0) {
        return true;
    } else {
        return false;
    }
});
console.log(task71);

//task8
console.log("task8");
const resMap = new Map<string, number>([
    ["огурцы", 300],
    ["помидоры", 200],
    ["соль", 10],
    ["сметана", 110],
]);
function resMapDeclaration(Map: any) {
    for (const [key, value] of Map) {
        if (value > 100) {
            console.log(key);
        }
    }
}
resMapDeclaration(resMap);

const resMapaArrow = (Map: any) => {
    for (const [key, value] of Map) {
        if (value > 100) {
            console.log(key);
        }
    }
};
resMapaArrow(resMap);

//task9
console.log("task9");
const numbers7 = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5];
function resSetDeclaration(set: any) {
    const a = new Set();
    for (const value of set) {
        a.add(value);
    }
    return Array.from(a);
}
console.log(resSetDeclaration(numbers7));

const resSetArrow = (set: any) => {
    const a = new Set();
    for (const value of set) {
        a.add(value);
    }
    return Array.from(a);
};
console.log(resSetArrow(numbers7));

//task10
console.log("task10");
const arr: Array<string> = ["a", "s", "d"];
let elem2 = "";
let elem3 = "";

const arrow = (arr: string[]) => {
    elem3 = arr[3];
    elem2 = arr[2];
    if (arr[3] === undefined) {
        elem3 = "eee";
    }
    if (arr[2] === undefined) {
        elem2 = "bbb";
    }
};
arrow(arr);
console.log(elem3);
console.log(elem2);

function decl(arr: string[]) {
    elem3 = arr[3];
    elem2 = arr[2];
    if (arr[3] === undefined) {
        elem3 = "eee";
    }
    if (arr[2] === undefined) {
        elem2 = "bbb";
    }
}
decl(arr);
console.log(elem3);
console.log(elem2);

//task11
console.log("task11");
const obj = { surname: "Петров", age: "20 лет" };
let name, surname, age;

const arrow1 = (obj: any) => {
    if ("name" in obj) {
        name = obj.name;
    } else {
        name = "Аноним";
    }
    if ("surname" in obj) {
        surname = obj.surname;
    } else {
        surname = "Анонимович";
    }
    if ("age" in obj) {
        age = obj.age;
    } else {
        age = "? лет";
    }
    console.log(name, surname, age);
};
arrow1(obj);

function decl1(obj: any) {
    if ("name" in obj) {
        name = obj.name;
    } else {
        name = "Аноним";
    }
    if ("surname" in obj) {
        surname = obj.surname;
    } else {
        surname = "Анонимович";
    }
    if ("age" in obj) {
        age = obj.age;
    } else {
        age = "? лет";
    }
    console.log(name, surname, age);
}
decl1(obj);

//task1A
console.log("task1A");
const str = "This website is for losers LOL!";

const delaa = (ts: string) => {
    const aa = ["a", "e", "i", "u", "o", "O", "A", "E", "I", "U"];
    let www = ts.split("");
    for (let i = 0; i < aa.length; i++) {
        www = www.filter((value) => {
            return value !== aa[i];
        });
    }
    return www.join("");
};
console.log(delaa(str));

//task2A R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy
console.log("task2A");

function accum(stst: string) {
    const sasa = stst.split("");
    let pusto = [];
    for (let i = 0; i < sasa.length; i++) {
        pusto.push(sasa[i].toUpperCase());
    }
    for (let u = 1; u < pusto.length; u++) {
        pusto[u] += pusto[u].repeat(u).toLowerCase();
    }
    return pusto.join("-");
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

//task3A
console.log("task3A");
function highAndLow(strrr: string) {
    const sasa = strrr.split(" ");
    const num = [];
    for (let i = 0; i < sasa.length; i++) {
        num.push(Number(sasa[i]));
    }
    let aamin = num.reduce((accum: number, currentValue: number) => {
        if (accum > currentValue) {
            accum = currentValue;
        }
        return accum;
    });
    let aamax = num.reduce((accum: number, currentValue: number) => {
        if (accum < currentValue) {
            accum = currentValue;
        }
        return accum;
    });
    return aamin + " " + aamax;
}

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5"));

//task4A
console.log("task4A");

function iso(fff: string) {
    return fff.length === new Set(fff.toLowerCase()).size;
}
console.log(iso("Dermatoglyphics"));
console.log(iso("aba"));
console.log(iso("moOse"));
