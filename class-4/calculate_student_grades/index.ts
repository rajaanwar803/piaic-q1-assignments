

let englishMarks: number = 88;
let urduMarks: number = 66;

let avgMarks: number = (englishMarks + urduMarks)/2;

let grade: string;

if (avgMarks >= 80) {
    grade = "A";
} else if (avgMarks >= 70 && avgMarks < 80) {
    grade = "B";
} else if (avgMarks >= 60 && avgMarks < 70) {
    grade = "C";
}
// else if (avgMarks >= 50 && avgMarks < 60) {
//     grade = "D";
// } else if (avgMarks >= 40 && avgMarks < 50) {
//     grade = "E";
// } 
else {
    grade = "F";
}

// console.log(`Your grade is ${grade}`);
console.log(`Your average score is ${avgMarks} and grade is ${grade}.`);


