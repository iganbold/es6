const fullName = "Itgel Ganbold";

// The for...of statement creates a loop iterating over iterable objects
for(const char of fullName) {
    console.log(char);
}

const prices = [600, 300, 800];
let total = 0;

for(const price of prices) {
    total = total + price;    
}
console.log(`Total: ${total}`);