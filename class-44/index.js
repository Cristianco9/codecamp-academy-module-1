/*
    Discrete mathematics
        - Propositional logic
        - Inference rules
*/
var a = 30;
var b = a; // 30
var c = b; // 30
// c -> b -> a
// The questions is
// c == a ??
// look Alexandra this is a comment line
// instate of a logic line, just a message
console.log("Value of the variable 'a': " + a); // 30
console.log("Value of the variable 'b': " + b); // 30
console.log("Value of the variable 'c': " + c); // 30

console.log("c == a :");
console.log(c == a); // true
a = "new value";
console.log("Value of the variable 'a': " + a);
console.log("c == a :");
console.log(c == a); // false
console.log("b == c :");
console.log(b == c); // true

// what is the 'c' variable value ?
console.log("Value of the variable 'a': " + a); // "new value"
console.log("Value of the variable 'b': " + b); // 30
console.log("Value of the variable 'c': " + c); // 30
