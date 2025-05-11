//Dates

// let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

let myCreatedDate=new Date(2023,0,23,5,3)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let date1=new Date("2023-01-14")
console.log(date1.toLocaleString());

let date2=new Date("01-25-2025")
console.log(date2.toLocaleString());



//TimeStsmps----------------------------------------------
//very useful when we design quizes , poles
console.log("Time stamp useful concept when we will design quizes and poles");

let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(date2.getTime());


console.log(Math.floor(Date.now()/1000));//converted in sec

//few more methods
let newDate=new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

//if I want to write date in a specific format
//  then I have to use string interpolation--means backtics
`${newDate.getDay()} and the time is`

newDate.toLocaleString('default',{
     weekday:"long",
     
})