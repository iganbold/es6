// let allows you to declare variables that are limited in scope to the block
if(false) {
    // let is scoped to the if statement
    let hello = "World";
}
// console.log(hello); ReferenceError: hello is not defined

// Constants are block-scoped, much like variables defined using the let statement. 
// The value of a constant cannot change through reassignment, and it can't be redeclared.

const world = "hello";
console.log(world);
// world = "hello 2"; TypeError: Assignment to constant variable.

