// Timestamps
console.log(new Date());

//Unix Time
//Jan 1, 1970
// 1s = 1000ms

//Date now()
console.log(Date.now())
//new Date().getTime()
console.log(new Date().getTime());
//new Date().valueOf()
console.log(new Date().valueOf())

//setTimeout(()=>{
//    console.log(Date.now())
//},1000);

// create id's in learning apps
let people  = []
people = [...people,{id:Date.now(),name:'peter'}]

setTimeout(()=>{
    people = [...people,{id:Date.now(),name:'john'}];
    console.log(people);
},100000);
//create/get dates
console.log(new Date(1638096408723));
const now = Date.now()
const futureDate = new Date(now+ 1000*60)
console.log(now);
console.log(futureDate);
//difference betwenn dates

const firstDate = new Date()
const secondDate = new Date(2021,12,20);
const firstValue = firstDate.getTime()
const secondValue = secondDate.getTime()
const timeDiff = secondDate-firstDate;
console.log(timeDiff/(1000*60));
const hours = timeDiff/ (1000*60*60)
console.log(hours);