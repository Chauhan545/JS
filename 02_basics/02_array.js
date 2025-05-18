//arrays part 2
//typeof array-object

const marvel=["thor",'stark','ironman']
const dc=["superman","flash","batman"]
// marvel.push(dc);//array inside array
// console.log(marvel);
// //array kisi ko bhi as a data le leta h//array ko bhi
// console.log(marvel[3][1]);
//but this is not a good method

//---------second method
const arr=marvel.concat(dc)
console.log(arr);

//--------------------------------------------
//push function push in existing array
//concat give u new concatenated array

//spread operator--------
const all_new_heros=[...marvel,...dc]
console.log(all_new_heros);

//*****
const arr1=[1,2,3,[4,5,6],7,[8,9,[10,11]]]

const arr2=arr1.flat(Infinity)
console.log(arr2);


//data scraping
//jab bhi hum deta select kerte h kisi web page se 
//bhot baar vo alag format mai aata h//node list, object
//but chaiye toh array //kyuki array pe he loop ker sakte h

console.log(Array.isArray("Shivani"));
console.log(Array.from("shivani"));

console.log(Array.from({name:"shivani"}));

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

