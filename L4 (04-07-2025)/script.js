/*let userData = [
    {
        name: "Priyanshu",
        age: "21",
    },
    {
        name: "Pranav",
        age: "20",
    },
    {
        name: "Divesh",
        age: "23",
    },
];

// use filter to get users with age greater than 20 and return their names use array.prototype
Array.prototype.filter = function (cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// Usage example
const olderUsers = userData
    .filter((user) => parseInt(user.age) > 20)
    .map((user) => user.name);
console.log(olderUsers);


console.log("SCRIPT STARTED");

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I GOT PLACED");
    }, 3000);
});

myPromise
    .then((res) => {
        console.log("Promise Resolved");
        console.log(res);
    })
    .then(() => {
        console.log("Party time");
    })
    .then(() => {
        console.log("WORKING WORKING WORKING");
    })
    .then(() => {
        console.log("LAYOFF");
    })
    .catch((err) => {
        console.log("Error:", err);
    });

// make promise , add 2-3 then and one catch

const hello = new Promise((res, rej) => {
    setTimeout(() => {
        res("Hello!");
    }, 2000);
});

hello
    .then((res) => {
        console.log("Promise Resolved");
        console.log(res);
    })
    .then(() => {
        console.log("World");
    })
    .then(() => {
        console.log("ABC");
    })
    .catch((err) => {
        console.log("Error:", err);
    });

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 1 unresolved");
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2 unresolved");
    }, 2000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 3 unresolved");
    }, 3000);
});

Promise.all([p1, p2, p3])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log("Error:", err);
    });

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1000);
});

async function checkAssignment() {
    const dataAssignment = await p1;
    console.log("CHECKING THE ASSIGNMENT", dataAssignment);
}

checkAssignment();
*/

async function fetchData() {
    const data = await fetch("https://dummyjson.com/products");
    const jsonData = await data.json();
    console.log(jsonData);
}

fetchData();
