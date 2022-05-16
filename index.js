console.log("working");

//First class functions / callback functions/ Higher Order Functions.

//Function defination/ function statement / Function declaration
//This hole funcion body is called function def/stat/dec.
//a();
//b();
//function a(){
//    console.log("I am A");
//}

//Function Expression - A function to the assigned to the variable is called function expression
//let b = function(){
//    console.log("I am B");
//}
//arrow function do not support hoisting
//since we know that functions are hoisted but it come with an exceptions too.
//The exceptions stands for the function expressions
//function expression are never hoisted
//a();
//b();

//const b = () =>{
 //   console.log("I am B");
//}

//anonymous function functions - function have donot have any name and which are used in function expression are called as anonymous functions.
//named functions - function having named are called named functions.

//First Class Functions - The functions are treated as variables, values which can be passed into onother function are arguments and which can also be returned from another function. They are also called as First Class Citizens.

//function add (a,b){//parameters(a,b)
//    console.log("guufuklj");
//}

//add(3,4);//arguments(values passed into functions are called arguments).
//function is passed as an argument into onother function 
//let functiond = function(a){//a is a parameter which is taking the function g which is passed as argument from the functiond.
//    console.log(a);
//}
//function g(){
//    console.log("I am g");
//}
//functiond(g);//function d is taking function g as argument
//function returned from another function

//---------------------------------------------------------------------------------
let funciond = function(){
    return function f(){//this function is f returnd from finctiond
        console.log("Hi,I am f");
    }
}
console.log(funciond());

//--------------------------------------------------------------------

//Higher Order function- the function which can take function as parameter or which can return another functions are called as higher order functions.
//the functions accepting the first class function are called higher order functions.

//The function f returned from function D is called firest class function whereas the function D which is returning the function f is called the higher order functions

//---------------------------------------------------------------------------------
//call back functions- These are those kind of functions which are called back after a
//certain period of time or are passed as values argument into another function which are in turn called as and when needed 

setTimeout(()=>{
    console.log("I am a callback function called after 2000 miliSecs");
},2000)//it takes two parameters - callback function and timeout value.after the timeout value has overlapsed /passed the call back function is called.

function h(a) {
    console.log("I am a function h");
    a();
}
h(function j (){
    console.log("I am a function j");

});

const sayHi = (namofFriend) =>{//callback function
     return "Hello my Friend" + namofFriend;
}
 const greeting =(friend,callbackFunction) =>{//High order function(greeting)
     console.log(callbackFunction(friend));//call back function == sayHi function with argument as name of the friend.....sayhi("Ravi");
 }

 greeting("Ravi",sayHi);//calling the high order function by passing the arguments as name of friend and the callback function.