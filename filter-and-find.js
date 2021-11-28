// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined

const people = [
    {name:'bob',age:20,position:'developer'},
    {name:'peter',age:30,position:'designer'},
    {name:'susy',age:25,position:'boss'},
    {name:'anna',age:35,position:'intern'},
];

const fruits = ['orange','pear','lemon'];
//filter 
const youngPeople = people.filter((person)=>{
    // if(person.age<30){
    //     return person;
    // }
    return person.age < 30;
});
console.log(youngPeople)
const developer = people.filter((person)=> person.position ==='developer');
console.log(developer);
//no match
const seniorDevs = people.filter((item)=> item.position==='senior dev');
console.log(seniorDevs);
//find
const peter = people.find((person)=> person.name ==='peter');
console.log(peter)
const fruit = fruits.find((fruit)=> fruit === 'lemon');
console.log(fruit);
//no match
const olderPerson  = people.find((person)=>person.age>35);
console.log(olderPerson);
//multiple matches - first match
const randomPerson = people.find((person)=> person.age<35);
console.log(randomPerson)

const anna = people.filter((person)=> person.name=='anna');
console.log(peter.position)
console.log(anna[0].position)