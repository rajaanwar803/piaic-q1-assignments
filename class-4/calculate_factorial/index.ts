
// function factorial (num: number) {
//     let result: number = 1;
//     for (let i = number; i >= 1; i--) {
//         result *= i;
//     }
//     return result
// }

// or

function factorial (num: number) {
    let result: number = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result
}

console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(4));

