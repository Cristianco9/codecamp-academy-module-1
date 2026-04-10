// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// Given variables
const months = 6;
const plan = 3;

// Global variable to store the monthly cost
let monthlyCost;
// Global variable to store the total membership cost
let totalCost;

// Data type validation
if(isNaN(months)) {
    console.log("The months should be a number");
} else if(months < 1) {
    console.log("The months should be grater than 0");
} else if(isNaN(plan)) {
    console.log("The plan should be a number");
} else if (plan < 1) {
    console.log("The plan should be grater than 0");
} else {

    // Switch statement to determinate the monthly cost
}