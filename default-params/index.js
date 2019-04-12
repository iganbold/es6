// error: Cannot read property 'nums' of undefined
// with defualt param, I don't need worry about undefined
function add(nums = []) {
    let total = 0;
    nums.forEach(element => {
        total += element;
    });
    console.log(`Total: ${total}`);
}

add();