import fetch from "node-fetch";

const URL = "https://jsonplaceholder.typicode.com/posts/";

const postNumbers = [23, 15, 7, 3, "kkk"];

async function showPosts() {
    let arrRes = [];
    for (const id of postNumbers) {
        console.log("fetch " + id);
        try {
            let res1 = await fetch(URL + id);
            if (res1.status !== 200) {
                throw new Error(res1.statusText);
            }
            arrRes.push(await res1.json());
        } catch (error: any) {
            console.log(error.message);
        }
    }
    return arrRes;
}

showPosts().then((e) => {
    console.log(e);
});

// task 1 - Promise chaining
