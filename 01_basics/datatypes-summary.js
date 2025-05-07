//Primitive datatypes= call by value//copy mai changes hote h original value mai nahi
//7 types: String, number, Boolean, null,undefined,Symbol-value ko unique bnanae k liye
//BigInt

const score=100
const scoreVal=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const id2=Symbol('123')
console.log(id===id2);

const bigNumber=65489445165265654464n


//non-primitive or reference
//Arrays, Objects, Functions

const heros=["tony stark","thor","shaktiman"]//arrays
//obj
{
    name:"shivani"
    age:"22"

}


//2nd method for object
const myFun=function(){
    console.log("Hello World");
    
}

console.log(typeof bigNumber); 

//---------------------Memory----------------

//---------------stack and heap memory---------------

//primitive type- stack memory-var ki copy milegi
//non primitive- heap memory- ref milega

//stack example
let myName="Shivani"

let otherName=myName
otherName="Chauhan"

console.log(myName);
console.log(otherName);


//heap memory example
let user1={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let user2=user1
user2.email="shivani@gmail.com"
console.log(user1.email);
console.log(user2.email);



