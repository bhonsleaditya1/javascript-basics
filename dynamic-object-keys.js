// dot notation
const person = {
    name:'john',
};
console.log(person.name);
person.age = 25;
console.log(person)

//square bracket notation

const items ={
    'featured-item':['item1','item2']
}

console.log(items["featured-item"]);
console.log(person['name']);

let appstate = 'loading';
appstate = 'error';
const keystate = 'computer'
const app = {
    [appstate]: true

};
app[keystate] = 'apple';
console.log(app);


const state ={
    loading: true,
    name:'',
    job:''
}

function updateState(key,value){
    state[key] = value;
}
updateState('name','john');
updateState('job','developer');
updateState('loading',false);
updateState('product',[])
updateState('name','peter')
console.log(state)