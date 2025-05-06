let score="99"

console.log(typeof score );
//bhot baar hume pta he ni hota jaise agar hume frontend request le rahe h
//

console.log(typeof(score));//as a method

let valueInNumber=Number(score)//score guarented number mai convert ho gya h
console.log(typeof valueInNumber);

//NaN concept
//let marks="10lpaZETA"
//let marks=null
//let marks=undefined
let marks=true
let val=Number(marks)
console.log(typeof val);
console.log(val);

//"33"=33
//"33abc"=NaN
//true=1; false=0

let isLoggedIn=1
let boolIsLoggedIn=Boolean(isLoggedIn)
console.log(boolIsLoggedIn);

//""=false
//"shivani"=true
//1=true, 0=false

let num=33
let str=String(num)
console.log(typeof str);

console.log(str);


//-------------------Operations-----------------
console.log("Operations lecture");


let value=3
let nVal=-value
//console.log(nVal);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// let s1="hello"
// let s2=" shivani"
// console.log(s1+s2);

// console.log(1+"2");
// console.log("1"+2);
// console.log("1"+"2");
// console.log("1"+"2"+2);
// console.log("1"+2+2);
// console.log(2+2+"1");

// console.log(3+4*5%3);//confusing code 
// console.log((3+4)*5%3);//correct way

console.log(true);//true
console.log(+true);//1
//console.log(true+);//error


let num1,num2,num3
num1=num2=num3=2+2//not good way

let counter=100
counter++
console.log(counter);
