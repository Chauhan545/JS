//arrays

const arr=[0,1,2,3,4,5,true,"shivani"]
console.log(arr);
console.log(arr[1]);


const arr1=["tony","thor","ankit","shivani"]
const arr2=new Array(1,2,3,4)

//array methods
//push
console.log(arr2);
arr2.push(5)
arr2.push(6)
console.log(arr2);
arr.push(5)
console.log(arr);

//pop
arr2.pop()//removing 6
console.log(arr2);

//unshift-------------
//inserting at the begining//by shifting array by 1 position
console.log("printing arr2");
console.log(arr2);
arr2.unshift(9)//adding 9 at the begining of arr2
console.log(arr2);
arr2.shift()//removing element from the begining
console.log(arr2);

//questionare methods
console.log(arr2.includes(9));
console.log(arr2.indexOf(9));
console.log(arr2);

//join convert array to string
console.log("join converts array to string ");

const newarr=arr2.join();
console.log(newarr);
console.log(typeof newarr);
console.log(arr2);

//slice,splice
//interview
console.log("difference between slice and splice is ");

const myArr=[10,20,30,40,50,60]
console.log(myArr);

//slice
console.log("slice concept ");
console.log("A ",myArr);


const a1=myArr.slice(1,3)
console.log(`slice array is ${a1}`);
console.log("B ",myArr);

//splice
console.log("splice concept ");
const a2=myArr.splice(1,3)
console.log(a2);
console.log("original myArr after splice ",myArr);
