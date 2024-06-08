let a=100;
if(true){
    let a=20
    console.log('inner:', a);
}
console.log(a);

const user={
    name:'bh',
    p: 8,

    msg: function(){
        console.log(`hi ${this.name}`);
    }
}
user.msg()

// const ab =(n1,n2)=>{
       
//        console.log(n1+n2);
// }
// ab(3,4)
const ab =(n1,n2)=>{
       
    return (n1+n2);
}
console.log(ab(3,4))