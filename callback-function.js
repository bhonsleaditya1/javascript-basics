//Callback-function

function makeUppercase(value){
    console.log(value.toUpperCase());
}
makeUppercase('peter');


function reverseString(value){
    console.log(value.split('').reverse().join(''));
}
function handleName(name,cb){
    const fullName = `${name} smith`;
    cb(fullName);
    //some more logic
}
handleName('peter',makeUppercase);
handleName('peter',reverseString);

handleName('peter',function(value){
    console.log(value)
});

handleName('peter',(value)=> console.log(value));

const btn = document.querySelector('.btn')
btn.addEventListener('click',function(){
    console.log('hello world');
});
// array methods, setTimeout, event listeners etc
