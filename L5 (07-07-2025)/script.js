/*function welcomeStudents(welcomeMessage, goodbyeMessage) {
    console.log(
        welcomeMessage +
            " " +
            this.studentName +
            " is a student of class " +
            this.studentClass +
            " " +
            goodbyeMessage
    );
}

const student1 = {
    studentName: "Yash",
    studentClass: "G4",
};
const student2 = {
    studentName: "Arnav",
    studentClass: "G6",
};

// CALL

welcomeStudents.call(student1, "Good Morning", "Bye");
welcomeStudents.call(student2, "Good Evening", "Bye");

// BIND
welcomeStudents.bind(student1, "Good Morning", "Bye");
welcomeStudents.bind(student2, "Good Evening", "Bye");

// // NORMAL FUNCTION

// function sumOfThree(a, b, c) {
//     console.log(a + b + c)
// }

// sumOfThree(1, 2, 3)

// // CURRIED FUNCTION

// function sumOfThree(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// console.log(sumOfThree(2)(4)(6))

// EVENT CAPTURING & EVENT BUBBLING
*/
const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener(
    "click",
    () => {
        console.log("GRANDPARENT CLICKED");
    },
    true
);

parent.addEventListener(
    "click",
    () => {
        console.log("PARENT CLICKED");
    },
    true
);

child.addEventListener("click", () => {
    console.log("CHILD CLICKED");
});
