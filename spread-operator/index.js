// The syntax is three dots(...) 
// followed by the array (or iterable*). 
// It expands the array into individual elements. 
// So, it can be used to expand the array 
// in a places where zero or more elements are expected.

// copying array
const exampleArray = [5,6,3,1,7,3];
const copyExampleArray = [...exampleArray];
console.log(copyExampleArray)
// out: [ 9, 6, 3, 1, 7, 3 ]

// concatinating array
const conArray1 = ['A','B','C'];
const conArray2 = ['C','D'];
const conArray3 = [...conArray1, ...conArray2];
console.log(conArray3);
// out: [ 'A', 'B', 'C', 'C', 'D' ]

// Spreading elements on functions
const fruits = ['apple', 'orange', 'banana'];
const getFruits = (fruit1, fruit2, fruit3) => {
    console.log(`Fruits: ${fruit1}, ${fruit2}, ${fruit3}`);
    // out: Fruits: apple, orange, banana
}
getFruits(...fruits);

// Spread syntax for object literals
// Seems: This feature have not supported yet.
const name = {
    firstName: 'Itgel',
    lastName: 'Ganbold'
};

const address = {
    city: 'Charlotte',
    state: 'NC'
};

const ceo = {...name, ...address};
console.log(`CEO Info: ${ceo}`);
