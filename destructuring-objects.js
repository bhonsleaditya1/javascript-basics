// faster/easier way to access/unpack variables from arrays, objects

const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    sibling: {
        sister: 'jane'
    },
};
const last = 'some value';

const {last:shakeAndBake,first,city,zip,sibling:{sister:favourite}} = bob;
console.log(first,city,zip,shakeAndBake,favourite);

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.sibling.sister;

//console.log(firstName, lastName, sister);

function printPerson({first,last,city,sibling:{sister}}){
    //console.log(person.first);
    //const {first,last} = person;
    console.log(first,last,city,sister);
}

printPerson(bob);