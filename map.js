// MAP Method
const people = [
    {
        name:'bob',
        age: 20,
        position:'developer',
    },
    {
        name:'anna',
        age: 25,
        position:'developer',
    },
    {
        name:'suzy',
        age: 30,
        position:'developer',
    },
    {
        name:'john',
        age: 26,
        position:'developer',
    },
]
//returns new array
// does not change the size of original array (unlike filter)
// uses values from original array when asking new one

const ages = people.map((person)=>{
    //console.log(person);
    //return 'hello world';
    return person.age;
});

const getAges = (person) => person.age*2;
console.log(getAges)

const ages1 = people.map((person)=> person.age *2);
console.log(ages)
console.log(ages1)

const newPeople = people.map((item) =>{
    return {
        firstName: item.name.toUpperCase(),
        oldAge: item.age + 20,
    }
})

console.log(newPeople);

const name = people.map((person)=>`<h2>${person.name}</h2>`);
const result = document.querySelector('#result');

result.innerHTML = name.join('');