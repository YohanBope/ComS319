/*
Author: Yohan Bopearatchy
ISU Netid : yohanb@iaste.edu
Date : Febuary 9th, 2023
Activity6 - Variables
*/

// Q1 : Is it permited the next ?
console.log("Q1 ---------------")
var var1 = "Iowa";
console.log(var1);
var var1 = 124;
console.log(var1);
// Is it permited ?
console.log("Yes");

// Q2 : Is it valid ?
console.log("Q2 ----------------");
let var2 = "Ames";
console.log(var2);
let var2 = 124;
// Is it valid ?
console.log("Not");

// Q3 : Is it valid ?
console.log("Q3 ----------------");
let var3 = "ISU";
console.log(var3);
var3 = 2023;
console.log(var3);
console.log("Valid")

// Q4 : Explain the Error.
console.log("Q4 ----------------");
let var4;
const var5;
console.log("What's the error : Uncaught SyntaxError: Missing initializer in const declaration")

// Q5 : Explain the Error.
console.log("Q5 ----------------");
const var6 = 3.1415;
var6 = 2.8;
console.log("What's the error : Uncaught TypeError: Assignment to constant variable.")

// Q6 : Explain the Error.
let first name = "Abraham";
console.log("spaces aren't allowed when naming a variable");
let 2numbers = [1,2];
console.log("numbers aren't allowed to begin a vaiable name");
let city-state = "Ames Iowa";
console.log("dashes aren't allowed when naming a vaiable");

// Q7 : What !! ??
let mainCity = "DesMoines";
console.log("This is the Capital :", MainCity)
console.log("When MainCity is called in the console log, MainCity gives the log the value it has been assigned")

// Q8 : "let" and "const" scope vs "var" scope
if (5 === 5) {
    var var7 = 100;
    }
    console.log(var7);
    if (5 === 5) {
    let var8 = 100;
    }
    console.log(var8);
    console.log("Error: Uncaught ReferenceError: var8 is not defined")



