// const score=400
// console.log(score);
// const bal=new Number(100);
// console.log(bal);
// console.log(bal.toFixed(2));
// const n=123.456;
// console.log(n.toPrecision(3));
// const t=100000
// console.log(t.toLocaleString('en-IN'));



// console.log(Math.floor(4.9));

// let myDate=new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let newDate=new Date("01-14-2024");
// console.log(newDate.toLocaleString());


// let timesStamp=Date.now()
// console.log(timesStamp);
// console.log(newDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let date=new Date();
console.log(date.getDay());
let mydate=date.toLocaleString('default',{
    weekday:"long",
})
console.log(mydate);