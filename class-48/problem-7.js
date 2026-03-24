// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// Require the user salary and credit score
let salary = parseFloat(prompt("Enter your monthly salary:"));
let creditScore = parseFloat(prompt("Enter your credit score:")); 

// conditionals
if (salary < 2000 && creditScore < 700) {
    alert("Load Rejected");
} else if (salary >= 2000 && creditScore >= 700) {
    alert("Load Approved");
} else {
    alert("Wrong input. Try again.");
}

/*
    ---------------------
    Desktop test
    ---------------------
    salary = 1900;      creditScore = 690;      =>  Load Rejected
    salary = 3000;      creditScore = 500;      =>  Load Rejected
    salary = 1900;      creditScore = 800;      =>  Load Rejected
    salary = 2200;      creditScore = 720;      =>  Load Approved
    salary = "hello";   creditScore = 800;      =>  Wrong input
    salary = 2700;      creditScore = "hello";  =>  Wrong input
    ---------------------
*/