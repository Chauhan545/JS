const score=400

const balance=new Number(100)
console.log(balance);
//1
console.log(balance.toString().length);

//2
console.log(balance.toFixed(2));

//3
const num=1123.8264
console.log(num.toPrecision(3));

//4
const num1=1000000
console.log(num1.toLocaleString());//us standards
console.log(num1.toLocaleString('en-IN'));//indian standards



//+++++++++++++++++++++++++  Maths+++++++++++++++++++
//maths library by default aati h js mai
console.log("Maths library started");
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.5));
console.log(Math.ceil(6.3));
console.log(Math.floor(9.3));
console.log(Math.min(4,8,5,2));
console.log(Math.max(4,8,5,2));

console.log("Important concept Math.random");
console.log(Math.random());
console.log(Math.random()*10);
//kyuki value zero bhi ho sakti h toh hum +1 ker denge
console.log(Math.floor((Math.random()*10)+1));


//trick
const min=10
const max=20
//very imp
console.log(Math.floor(Math.random()*(max-min+1))+min);

 