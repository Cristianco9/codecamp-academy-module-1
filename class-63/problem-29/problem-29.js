// Author: Cristian Camilo Cortes Ortiz

// Variable to store the total points
let totalPoints = 0;

// Loop through the 5 leves
for (let level = 1; level <= 5; level++) {

    // Points earned in the current level
    let points = level * 10;

    // Add points to the total
    totalPoints = totalPoints + points;
}

// Print the final result
console.log("Total points earned: ", totalPoints);
