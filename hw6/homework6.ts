//task1
console.log("task1");
const cat0: { name?: string; age?: number } = {
    name: "dog",
    age: 95,
};
console.log(cat0);
delete cat0.name;
delete cat0.age;
console.log(cat0);

//task2
console.log("task2");
const dog = {
    name: "kwa",
    age: 74,
};
if ("last name" in dog) {
    console.log(true);
} else {
    console.log(false);
}
//task3
console.log("task3");
const student: { name: string; age: number; isHappy: boolean } = {
    name: "John",
    age: 19,
    isHappy: true,
};
for (const option in student) {
    console.log(option);
}
for (const option in student) {
    console.log(student[option as keyof { name: string; age: number; isHappy: boolean }]);
}

//task4
console.log("task4");
const colors = {
    "ru pum pu ru rum": {
        red: "красный",
        green: "зеленый",
        blue: "синий",
    },
};
console.log(colors["ru pum pu ru rum"].red + " и " + colors["ru pum pu ru rum"].blue);

//task5
console.log("task5");
interface Isalaries {
    andrey: number;
    sveta: number;
    anton: number;
    andrey2: number;
    alexandra: number;
}
const salaries: Isalaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey2: 664,
    alexandra: 199,
};
let sumSalaries = 0;
let count = 0;
for (const sal in salaries) {
    sumSalaries += salaries[sal as keyof Isalaries];
    count = count + 1;
}

const average_salary = sumSalaries / count;
console.log(average_salary);

//task6
console.log("task6");

interface IuserRegistrationAndLogin {
    login: string;
    password: string;
}
const userRegistration: IuserRegistrationAndLogin = {
    login: "",
    password: "",
};
const userLogin = {
    login: "Vika",
    password: "1234zxcv",
};
function metod_one(login: string, password: string) {
    userRegistration.login = login;
    userRegistration.password = password;
}
function metod_two(registration: IuserRegistrationAndLogin, user: IuserRegistrationAndLogin) {
    if (registration.login === user.login && registration.password === user.password) {
        return "**Добро пожалоВать**";
    } else {
        return "**НЕ Добро пожалоВать**";
    }
}
metod_one("Vika", "1234zxcv");
console.log(metod_two(userRegistration, userLogin));

//task1A
console.log("task1A");
interface Inumbers {
    [key: string]: string;
}
const numbers: Inumbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
};
function football(str: string, numberdata: Inumbers) {
    const a: string = str.slice(0, 1);
    const b: string = str.slice(-1);
    let resultA = "";
    let resultB = "";
    for (const numm in numberdata) {
        if (a === numm) {
            resultA = numberdata[numm as keyof Inumbers];
        }
    }
    for (const numm in numberdata) {
        if (b === numm) {
            resultB = numberdata[numm as keyof Inumbers];
        }
    }
    return "Результат матча: " + resultA + " : " + resultB;
}
console.log(football("5:2", numbers));

//task2A
console.log("task2A");
const student1 = {
    name: "Polina",
    age: 27,
};
const student2 = {
    name: "Polina",
    age: 27,
};
console.log(JSON.stringify(student1) === JSON.stringify(student2));
//task3A
console.log("task3A");
interface Icat {
    name: string;
    age: number;
}
const cat: Icat = {
    name: "Енчик",
    age: 3,
};
const cat2: Icat = JSON.parse(JSON.stringify(cat));
const cat3: Icat = Object.assign({}, cat);

cat.name = "Horse";
console.log("объект 1", cat);
console.log("объект 2", cat2);
console.log("объект 3", cat3);
