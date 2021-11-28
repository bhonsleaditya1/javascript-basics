// Reduce
// iterates, callback function
// reduces to a single value - number, array, object
//1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iterative/value
const staff = [
    {name:'bob',age:20,position:'developer',salary:100},
    {name:'peter',age:30,position:'designer',salary:300},
    {name:'susy',age:25,position:'boss',salary:400},
    {name:'anna',age:35,position:'intern',salary:10},
];

const dailyTotal = staff.reduce((total,person)=>{
    console.log(total);
    console.log(person.salary);
    total += person.salary;
    return total;
}, 1000);

console.log(dailyTotal)