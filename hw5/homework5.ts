//task1
console.log("task1");
function getSum(a: number): number {
    let sum = 0;
    for (let i = 0; i <= a; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum(100));

//task2
console.log("task2");
function credit(creditSum: number): string {
    const percent = 0.17;
    const years = 5;
    const ii = percent / 12;
    const n = years * 12;

    const annuitet: number = creditSum * ((ii * (1 + ii) ** n) / ((ii + 1) ** n - 1));
    const pereplata: number = n * annuitet - creditSum;

    return pereplata.toFixed(2);
}
console.log(credit(1000));

//task3
console.log("task3");
function trimString(str: string, num1: number, num2: number): string {
    if (str.length < num1 || str.length < num2) {
        const case1 = "числа выходят за границы сторки";
        return case1;
    } else if (num1 >= num2) {
        const case2 = "первое число должно быть меньше второго";
        return case2;
    } else {
        return str.substring(num1, num2);
    }
}
console.log(
    trimString("Написать функцию **trimString** которая в качестве аргумента принимает три параметра:", 10, 19),
);

//task4
console.log("task4");
function getSumNumbers(num: number): number {
    const strNum = String(num);
    const strArr = strNum.split("");
    let sumNum = 0;
    for (let i = 0; i < strNum.length; i++) {
        sumNum += Number(strArr[i]);
    }
    return sumNum;
}
console.log(getSumNumbers(466874));

//task5
console.log("task5");
function getSum1(a: number, b: number): string {
    let sum = 0;
    if (a === b) {
        return a + " Since both are same";
    } else if (b < a) {
        return " b should be > a";
    } else {
        for (a; a <= b; a++) {
            sum += a;
        }
    }
    return String(sum);
}
console.log(getSum1(-4, 10));

//task6
console.log("task6");
const foo = (): string => {
    return "foo";
};
const boo = (): string => {
    return "boo";
};
function fooboo(bu: boolean, foo: () => void, boo: () => void): string {
    if (bu) {
        return String(foo());
    } else {
        return String(boo());
    }
}
console.log(fooboo(true, foo, boo));

//task7
console.log("task7");

((chislo: number) => {
    let res = 1;
    for (let i = 1; i <= chislo; i++) {
        res *= i;
    }
    console.log(res);
})(15);

//task1 Advanced
console.log("task1 Advanced");
function task1(st1: number, st2: number, st3: number): boolean {
    let big = 0;
    let wewe = 0;
    if (st1 >= st2 && st1 >= st3) {
        big = st1;
        wewe = st2 + st3;
    } else if (st2 >= st1 && st2 >= st3) {
        big = st2;
        wewe = st1 + st3;
    } else if (st3 >= st1 && st3 >= st2) {
        big = st3;
        wewe = st2 + st1;
    }
    if (wewe > big) {
        return true;
    } else {
        return false;
    }
}
console.log(task1(74, 10, 20));

//task2 Advanced
console.log("task2 Advanced");
function task2(n: number, m: number): number {
    if (n === 0 || m === 0) {
        return 0;
    } else {
        const count: number = n - 1 + n * (m - 1);
        return count;
    }
}
console.log(task2(4, 3));

//task3 Advanced
console.log("task3 Advanced");
const myBalance = 3000;
const phonePrice = "627.26$";
const casePrice = "26.99$";
const taxRateProc = 12;
function taxfunct(price: number): number {
    const taxcount: number = price * (taxRateProc / 100);
    return taxcount;
}
function priceFormating(price: string): number {
    const fprice = Number(price.slice(0, price.length - 1));
    return fprice;
}
function priceFloat(price: number) {
    const ffprice = price.toFixed(2);
    return ffprice;
}
function Result(balance: number) {
    const newPhonePrice: number = priceFormating(phonePrice);
    const newCasePrice: number = priceFormating(casePrice);
    const newCasePriceFloat = priceFloat(newCasePrice);
    const newPhonePriceFloat = priceFloat(newPhonePrice);
    const newCasePriceTax: number = taxfunct(newCasePrice);
    const newPhonePriceTax: number = taxfunct(newPhonePrice);
    const newCasePriceTaxFloat = priceFloat(newCasePriceTax);
    const newPhonePriceTaxFloat = priceFloat(newPhonePriceTax);
    const pricePhoneAndTax = Number(priceFloat(Number(newPhonePriceFloat) + Number(newPhonePriceTaxFloat)));
    const priceCaseAndTax = Number(priceFloat(Number(newCasePriceFloat) + Number(newCasePriceTaxFloat)));

    let coutPhone = 0;
    while (balance > newPhonePrice) {
        coutPhone = ++coutPhone;
        balance = balance - pricePhoneAndTax;

        console.log(
            "Phone price: " +
                newPhonePriceFloat +
                " $, Tax: " +
                newPhonePriceTaxFloat +
                " $, Total: " +
                pricePhoneAndTax +
                " Money left: " +
                priceFloat(balance),
        );
        balance = balance - priceCaseAndTax;
        console.log(
            "Case price: " +
                newCasePriceFloat +
                " $, Tax: " +
                newCasePriceTaxFloat +
                " $, Total: " +
                priceCaseAndTax +
                " Money left: " +
                priceFloat(balance),
        );
    }
    console.log("Phone count: " + coutPhone);
}
Result(myBalance);
