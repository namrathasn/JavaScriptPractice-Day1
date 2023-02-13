//javascript is a synchronous single threaded language,which means it will execute line by line,after executing the first line it will proceed to next line for executing

// Hello world
console.log("Hello Namratha")
// variables
var names='namratha'
console.log(names)

sentence="how are ypu doing"
console.log(sentence)

// operators,conditional statements
a=20
b=30
c=a+b
console.log(c)
if(a>b)
{
    console.log("a is greater")
}
else
{
    console.log(" b is greater")
}
//for loop
for(i=0;i<5;i++)
{
    console.log(i)
}
//while loop
i=10
while(i>5)
{
    console.log(i)
}
//do-while
i=10
do{
    console.log(i)

}while(i<5)
//switch case

choice=1
switch(choice)
{
    case 1:  console.log("wednesday executed")
    break
    case 2:console.log("thursday executed")
    break
    default : console.log('not found')

}
//javascript functions

function add(a,b)
{
    var c=a+b
    console.log(c)

}
var num1=add(10,20)

//javascript hoisting
//before javascript hoisting
var x=10
function getName()
{
    console.log("hello namratha")
}
getName()
console.log(x)
//output
//hello namratha
//10

//after javascript hoisting
getName()
console.log(x)
var x=10
function getName()
{
    console.log("hello namratha")
}
//output
//hello namratha
//undefined

//note- undefined vs not defined

//undefined-before executing the code javascript allocated memory for the variable as undefined so when we call the variable before declaration then the result will be undefined

//not-defined-when we don't declare a variable and we are calling the variable then the result will be not-defined
//--------------------------------

//How to get input from user(write in chrome console)
fruit=prompt('which is your fav fruit')
console.log(fruit)

//scope in javascript
//let - for variable declaration
let global='somevalue'
if(true)
{
    let local='somevalues'
    console.log(global)
    console.log(local)

}
console.log(local)
//output - local is not defined (because the variable declared as local variable which means it can be accessed inside method)
let global='somevalue'
if(true)
{
    let local='somevalues'
    let global='newvalue'
    console.log(global)
    console.log(local)

}
//output- value will be changed
//---------------------
//when we use VAR
let global='somevalue'
if(true)
{
    var local='somevalues'
    let global='newvalue'
    console.log(global)
    console.log(local)

}
console.log(local)
//by using var we can access the variable which is declared inside the method which is local variable,can be accessed outside the function also 
// better to use let - because of privacy
