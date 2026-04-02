// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

console.log("************************");
console.log("Example 1");
let temperature = 35;
// Ternary operator
let weather = temperature > 30  // Conditional to evaluate
    ? "Hot day" // ? => True clausula
    : "Normal temperature"; // : =>  False clausula
console.log("Ternary Operator:");
console.log(weather);

// Classic conditional statement
if (temperature > 30) {
    weather = "Hot day";
} else {
    weather = "Normal temperature";
}
console.log("If - Else statement:");
console.log(weather);
console.log("************************");