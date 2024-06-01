// const sym=Symbol("key1")
// let User={
//     name:"Bhavana",
//     [sym]:"key1",
//     "full name" : "Bhavana B Choudhary",
//     age:19,
//     loc:"Bangalore",
// }
//  console.log( User)

// User.hey=function(){
//     console.log(`hii ${this.name}`);
// }
// console.log(User.hey());

// const tinder=new Object();
// tinder.id=123;
// console.log(tinder);


const obj1={1:"a",2:"b",}
const obj2={3:"c", 4:"d",}
const ob3={obj1,obj2}
console.log(ob3)

const user={
    name:'name',
    age:10,
}
function disp(userobj){
       console.log(userobj.age)
}
console.log(user)