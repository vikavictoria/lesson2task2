import fetch from "node-fetch";

const URL = "https://jsonplaceholder.typicode.com/posts/";

const postNumbers = [23, 15, 7, 3];

let promises: any = [];
for (const id of postNumbers) {
    promises.push(ShowPostPromise(URL, id));
}
function ShowPostPromise(url: string, id: number | string) {
    return new Promise((resolve, reject) => {
        fetch(url + id)
            .then((e) => {
                if (e.status === 200) {
                    return e.json();
                } else {
                    reject("error URL: " + id);
                }
            })
            .then((e) => {
                resolve(e);
            });
    });
}

Promise.all(promises)
    .then((e) => {
        console.log(e);
    })
    .catch((e) => {
        console.log(e);
    });
