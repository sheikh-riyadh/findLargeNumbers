/* You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else. */

let num1 = 13;
let num2 = 79;
let num3 = 45;


/* Condition checking for finding large number*/

if (num1 > num2 && num1 > num3) {
    console.log("Large number is:", num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log("Large number is:", num2);
}
if (num3 > num1 && num3 > num2) {
    console.log("Large number is:", num3);
}