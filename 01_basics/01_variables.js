const accountId=123 //can't change
let accountEmail="shivani@gmail.com"
var accountPwd="123456"
accountCity="Jaipur"//kyuki js safe language h 
//toh bina datatype k bhi hum likh sakte h

let accountState// agar value assign nahi ki toh undefined show kerega
 

//accountId=2//not allowed

accountEmail="chauhan@gmail.com"
accountPwd="212121"
accountCity="Delhi"

console.log(accountId);
console.log(accountEmail); 
/*
    Prefer not to use var 
    because of issue in block scope and functional scope 
*/

console.table([accountId ,accountEmail , accountPwd , accountCity,accountState])
