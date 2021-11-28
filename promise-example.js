// Promises example
// after 1s first red;
// after 3s second blue;
// after 2s third green
// IN SEQUENCE !!!!

const btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
    addClolor(1000, '.first','red','hello')
        .then((data)=> addClolor(3000,'.second','blue',data))
        .then((data)=>{
            addClolor(2000,'.third','green')
            console.log(data)
        })
        .catch((err)=>console.log(err));
})

function addClolor(time,selector,color,data){
    //console.log('add color');
    const element = document.querySelector(selector);
    return new Promise((resolve,reject)=>{
        if(element){
            setTimeout(()=>{
                element.style.color = color;
                resolve(data);
            },time);
            
        }else{
            reject(`There is no such element :"${selector}"`);
        }
    })
}