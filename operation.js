/*
Explanation of the variable b:
a++ → Post-increment: returns 2, then a becomes 3.
++a → Pre-increment: increments a to 4, then returns 4.
--a → Pre-decrement: decrements a to 3, then returns 3.
a-- → Post-decrement: returns 3, then a becomes 2.
so the expression becomes b=2+4-3+3 so b=6
After these operations, the final values will be:
a = 4
b = 10
*/

let a = 4;
let b = a++ + ++a - --a + a--;  // Perform the operations on a

console.log("Value of a: " + a);  // Display the value of a
console.log("Value of b: " + b);  // Display the value of b
