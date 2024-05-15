// /*
// // Assignment operators
// let a = 4;
// a **= 7;
// let b = 5;
// b %= 2;//b=b %2


// console.log("the new value will be:", a);
// console.log("the new value will be:", b);
// let c = 6;
// c = c + 5;

// // comparison operator
// console.log(c);
// if (a !== 5) {
//     console.log("you pass");
// } else {
//     console.log("fail");
// }

// //Logical Operator
// let x = 4;
// let y = 5;
// console.log("Using Logical AND below:");
// if (x == 4 && y == 5) {
//     console.log("pass");
// }
// else {
//     console.log("fail ");
// }
// console.log("Using Logical OR below:");

// let j = 9;
// let k = 8;
// if (j == 6  || k == 5) {
//     console.log("drink");
// }
// else {
//     console.log("eat");
// }
// console.log("Using Logical Not below:");
// let s = 4;
// let t = 3;
// console.log(!(a < b)); //if a is less then 4 then the condition is false but due to the ! it will give you tue ans


// // for finding num is odd or even
// let m = 45;
// if(m%2 ==0){
//     console.log(m, "is even");
// } else {
//     console.log("number is Odd")
// }
// // else if
// let mode= "blue";
// let color;
// if (mode==="dark") {
//     console.log(color = "black");
// } else if (mode==="blue") {
//     console.log(color = "blue");
// }
//  else if (mode==="pink") {
//     console.log(color = "pink");
// }
// else {
//     console.log(color = "white");
// }
// // Ternary Operator
// let age = 45;
// let h = age < 18 ? "adult" : "not adult";
// console.log(h);

// // alert and prompt
// alert("go to prompt");

// let num = prompt("enter value");
// if (num % 2 === 0) {
//     console.log("number is even")

// } else {
//     console.log("number is odd")

// }
// */
// // let marks = prompt("Entery your Marks:");
// // if (marks >= 80 && marks <= 100) {
// //     console.log("Grade A")
// // } else if (marks >= 70 && marks <= 79) {
// //     console.log("Grade B")

// // }
// //  else if (marks >= 60 && marks <= 69) {
// //     console.log("Grade C")

// // }
// //  else if (marks >= 50 && marks <= 59) {
// //     console.log("Grade D")

// // }
// //  else if (marks >= 0 && marks <= 49) {
// //     console.log("Fail")

// // }

// // for Loop
// for (let i = 1; i <= 10; i++){
//     console.log("Aqib is my friend");
// }
// // while loop:> initialization is put before while

// let s = 0;
// while (<= 6) {
//     console
// }

// // do while loop:> it is used when code is execute at least one time even if the condition is false
// /*let k = 2;
// do {
//     console.log("do while loop");
//     k++
// } while (k <= 9);*/

//  for-of loop :>  it help to iterate loop to put loops on arrays and strings
/*let str = "Aqib Shinwari Landikotal Saidge Khel";
 for (let i of str) {
     console.log(i);
 }*/

//  for-in loop :> it is used for objects as well as for arrays.
/*
let student = {
    Name: "aqib",
    age: 20,
    GPA: 3.8,
    isPass: true,
};

for (let i in student) {
    console.log(i,student[i]);
}

*/
/*print all even number using loop from 0 to 100
for (let i = 0; i <= 100; i++){
    if (i % 2 !==0) {
        console.log(i)
    }
}*/
/*print the number which match with the prompt value other wise diplay that you enter wrong value
// let  userName = prompt("Enter your Number");
// let gameNum=25;
// while (userName != gameNum){
//    userName= prompt("you guess the wrong number, enter number agian")
// }
console.log("Congratulation you guess the number");*/
// Strings
// let str = "Awais qarrni";
// console.log(str.length);
// template literals
// let obj = {
//     cost: 90,
//     item,
// };
// console.log("the cost of item is :", item.cost, "and the quality of item ", item.quality);
/*String Methods
let str1= "Aqib";


console.log(str1.replace("a", "s"));*/

// let marks = [65, 75, 45, 75, 34, 75,];
// for (let i = 0; i < marks.length; i++){
//     console.log(i);
// }
//  Array
// let studentClass = ["ist", "2nd", "3rd","4th","5th","6th"];
// for (let i = 0; i < 5; i++){
//     console.log(studentClass);
// }




/*
let i = 0;
for (let val of num) {
    
    console.log("the value of index ", i, val);
    i++;
}

for (let i = 0; i < num.length; i++){
    console.log(num.length);
}
let items= [250, 645, 300, 900, 50];
// for (let val of num) {
//     console.log("the value of item at index",i,"=",val)
//     let offer = num[i]/ 10;
//     num[i] = num[i] - offer;
//     console.log("the value after offer ",num[i]);
// }
for (let i = 0; i < items.length; i++){
     console.log("the value of item at index",i,"=",items[i])
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
    console.log("the value after offer is", items[i]);
}
    console.log(items);*/

//     let arry = ["Aqib", "Khan", "Shinwari"];
//     let arry2 = ["Sano", "Khan", "Shinwari"];
    
// let value = arry.unshift("Aqib");
// console.log(arry);
// let val = arry2.shift("Sano");
// console.log(arry2);

// const students= ["aqib","hasham","roman","asim jan"];
// const a= students.slice(1,2);
// console.log(students);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits);

// console.log(fruits.slice(1, 2));
// let arra3 = [1, 2, 3, 4, 5, 6, 7];
// console.log(arra3.splice(2, 0, 101));


// Create an Array
 const fruits = ["Banana", "Orange", "Apple", "Mango"];

 // At position 2, add "Lemon" and "Kiwi":
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

// let fruits = ['apple', 'banana', 'cherry'];
// fruits.splice(1, 0, 'blueberry', 'kiwi'); // Adds 'blueberry' and 'kiwi' at index 1
// console.log(fruits); // Output: ['apple', 'blueberry', 'kiwi', 'banana', 'cherry']
