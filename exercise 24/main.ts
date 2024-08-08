//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


//creating  a variable
let apple="apple";

// test for equality
console.log("apple is qual to apple");
console.log(apple =="apple");

//test for inequality
console.log("apple is not equal to apple");
console.log(apple !="apple");

//test using the lower case function

let uppercaseApple='APPLE';
console.log("apple is equal to apple after converting to lowercase");

console.log(uppercaseApple.toLowerCase() =="apple");

console.log("apple is equal to apple after converting to lowercase");

console.log(uppercaseApple.toLowerCase() =="apple");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let ten=10;
let twenty=20;

//equals to
console.log("ten is not equal to twenty");
console.log(ten==twenty);

//not equal to
console.log("ten is not equal to twenty");
console.log(ten!=twenty);

//greater than
console.log("twenty is greater than ten");
console.log(twenty>ten);

//less than
console.log("twenty is less than ten");
console.log(twenty<ten);

//greater than or equal to
console.log("twenty is greater than equal to ten");
console.log(twenty>=ten);

//less than or equal to
console.log("twenty is less than equal to ten");
console.log(twenty<=ten);

// Tests using "and" and "or" operators

//using &&(and)
console.log("twenty is not equal to ten and twenty is greater than ten");
console.log(twenty !=ten && 20 >10);

console.log("twenty is not equal to ten and ten is less than twenty");
console.log(twenty !=ten && 10 >20);

// using ||  (OR)
console.log("twenty is greater than ten or twenty is equal to ten");
console.log(twenty>ten || twenty==twenty);

console.log("twenty is less than ten or twenty is not equal to ten");
console.log(twenty<ten || twenty!=twenty);

let fruits=["apple","mango","banana"]
console.log("apple is include in my fruits array");
console.log(fruits.includes(apple));

// Test whether an item is not in a array

// let fruits=["apple","mango","banana"]
console.log("apple is not include in my fruits array");
console.log(!fruits.includes(apple));



