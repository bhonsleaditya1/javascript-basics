// ECMAScript 2022
// at() - takes integer and returns the item at that index - string,array

const scores = [99,98,100]
const oldLast = scores[scores.length-1]
console.log(oldLast);
const newLast = scores.at(-1);
console.log(newLast);
const channel = 'Hello World'
console.log(channel.at(0));

// Top Level Await - Basic Example
fetch()