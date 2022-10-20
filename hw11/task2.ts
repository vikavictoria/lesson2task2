import fetch from "node-fetch";

const URL = "https://jsonplaceholder.typicode.com/todos";
let myArr: any = [];
let newArr: any = [];
async function getTodos() {
    const response = await fetch(URL);
    return await response.json();
}

getTodos().then((res) => {
    myArr = res;
    console.log(printTodos());
});

function printTodos() {
    for (const id in myArr) {
        newArr.push({ id: myArr[id].id, title: myArr[id].title });
    }
    return newArr;
}
