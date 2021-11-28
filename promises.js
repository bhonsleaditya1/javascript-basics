//Promises

// async await
// consume/use promises


// Pending, Rejected, Fulfilled

const value = 2

const promise = new Promise((resolve,reject)=>{
   const random = Math.floor(Math.random()*3);
   if(random === value){
       resolve('you gussed correctly')
   }else{
    reject('wrong answer')
   }
    //resolve([1,2,3]);
   //reject('there was error');
})
//console.log(promise.value);

promise.then((data)=>console.log(data)).catch((err)=>console.log(err));