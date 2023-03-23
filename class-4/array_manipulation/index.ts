

let fruits: string[] = ["apple", "banana", "orange", "strawberry"];

console.log(`Original array: ${fruits}`);
fruits.push("mango");
console.log(`After appending mango: ${fruits}\n`);

console.log(`Original array: ${fruits}`);
fruits.unshift("grapes");
console.log(`After prepending grapes: ${fruits}\n`);


console.log(`Original array: ${fruits}`);
fruits.splice(2, 1, "cherry"); // Removes banana and replace it with cherry
console.log(`After replacing banana: ${fruits}\n`);


