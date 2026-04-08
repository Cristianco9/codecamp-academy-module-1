// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// Storage the shipping variables
const shippingMethod = "express";
const region = "International";

// Global shipping cost variable
let cost = 0;

switch(shippingMethod) {

    case "standard":
        if (region === "local") {
            cost = 5;
        } else if (region === "national") {
            cost = 10;
        } else if (region === "International") {
            cost = 20;
        } else {
            console.log("Invalid region.");
            break;
        }
        console.log("Shipping cost : $", cost);
        break;
}