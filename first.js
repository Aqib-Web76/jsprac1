// Assignment operators
let a = 4;
a **= 7;
let b = 5;
b %= 2;//b=b %2


console.log("the new value will be:", a);
console.log("the new value will be:", b);
let c = 6;
c = c + 5;

// comparison operator
console.log(c);
if (a !== 5) {
    console.log("you pass");
} else {
    console.log("fail");
}

//Logical Operator
let x = 4;
let y = 5;
console.log("Using Logical AND below:");
if (x == 4 && y == 5) {
    console.log("pass");
}
else {
    console.log("fail ");
}
console.log("Using Logical OR below:");

let j = 9;
let k = 8;
if (j == 6  || k == 5) {
    console.log("drink");
}
else {
    console.log("eat");
}
console.log("Using Logical Not below:");
let s = 4;
let t = 3;
console.log(!(a < b)); //if a is less then 4 then the condition is false but due to the ! it will give you tue ans



