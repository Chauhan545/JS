const name="shivani"
const repoCount=50
console.log(name+repoCount+"Value");//outdated syntax

//string interpolation
//using backtics
console.log(`hello my name is ${name} and my repository count is ${repoCount}`);

//2nd method to declare string
//using objects
const game=new String('badminton')
console.log(game[0]);
console.log(game.__proto__);

console.log(game.length);
console.log(game.toUpperCase());
console.log(game);

console.log(game.charAt(2));//iss indx pe konsa char h
console.log(game.indexOf('a'));// a ka index kya h


const str=game.substring(0,2)
console.log(str);


const str1=game.slice(-8,3)
console.log(str1);

const str2="  shivani  "
console.log(str2);
console.log(str2.trim());


const url="https://shivani.com/shivani%20chauhan"
console.log(url.replace('%20','$'));

console.log(url.includes('shivani'));
 

const str3=new String('shivani-btech-cse')
console.log(str3.split('-'));
