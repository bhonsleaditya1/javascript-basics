// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

//arrays
const fruits = ['orange','banana','lemon','pear'];
const [fruit, second,...restOfTheFruits] = fruits;
console.log(fruit,second,restOfTheFruits);
const specificFruit= restOfTheFruits.find((fruit)=> fruit=='lemon');
console.log(specificFruit);
// objects
const person = {name:'bob',lastName:'smilga',age:20,position:'developer'}
// const { ...rest,job} = person;
const {job, ...rest} = person;
console.log(job,rest)

//functions
const getAverage  = (name, ...scores) => {
    console.log(name);
    console.log(scores);
    const average = scores.reduce((total, score)=>{
        total += score
        return total;
    },0)/scores.length;
    console.log(average);
}
//getAverage(person.name,89,76,81,190)
const testScores = [23,45,67,89];


getAverage(person.name,...testScores)