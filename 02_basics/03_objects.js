//singleton//koi bhi constructor se jab hum object bnate h
//toh singleton ek object bnata h //matlab ki yeh apne tarha ka ek he object h
//---- lekin dusri tarha se vo singleton nahi hota uske multiple instances bnn jaate h
//Object.create//iss mai banta h singleton

myarr=["s",'h']
console.log(myarr[0]);

const mySym=Symbol("key1")

//object literals
const jsUser={
    //key:value
    //by default -- "name":"shivani"
    name:"shivani",
    age:22,
    //mySym:"myKey1",//not a way to define symbol
    [mySym]:"myKey1",
    "fullname":"shivani chauhan",
    location:"Jaipur",
    isLoggedIn:false,
    email:"shivani01@gmail.com",
    loginDays:["Monday","Tuesday"]

}

//method to access objects
console.log("methods to access js objects is= ");
console.log(jsUser.email);//using dot operator
console.log(jsUser["email"]);//2nd method to access obj

console.log(jsUser.fullname);
console.log(jsUser["fullname"]);

console.log(jsUser[mySym]);
console.log( typeof jsUser.mySym);
console.log(typeof jsUser[mySym]);


//modify obj value
jsUser.email="shivani111@amazon.com"
console.log("to lock the value freeze that object ");
//Object.freeze(jsUser)
jsUser.email="chau@gmail.com"
console.log(jsUser);

//functions are treated as variables

jsUser.greet=function () {
    console.log("hello js user from function");
    
}

console.log(jsUser.greet);//function execute nahi hua h uska reference nahi aaya h
console.log(jsUser.greet());

//same object ko reference kerna h toh this likh sakte h
jsUser.greetTwo=function(){
    console.log(`hello js user from second function ${this.name}`);
    
}

//this. //jo bhi obj hoga uss ki sari properties mil jayegi
console.log(jsUser.greetTwo());
