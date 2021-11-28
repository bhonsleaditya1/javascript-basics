// Unique Values
const menu = [
    {
        name: 'pancakes',
        category:'breakfast'
    },
    {
        name:'burger',
        category:'lunch'
    },
    {
        name:'steak',
        category:'breakfast'
    },
    {
        name: 'bacon',
        category:'breakfast'
    },
    {
        name: 'pancakes',
        category:'breakfast'
    },
    {
        name:'burger',
        category:'lunch'
    },
    {
        name:'steak',
        category:'breakfast'
    },
    {
        name: 'bacon',
        category:'breakfast'
    },
]

const categories = ['all',...new Set(menu.map((item)=> item.category))];
console.log(categories);

const unique = document.querySelector('#unique');
unique.innerHTML = categories.map((category)=> {
    return `<button>${category}</button>`
}).join('');

// map -get all instances 
// new Set - narrow down
// ['all',...] - turn it back to array 