// used when you don't know how many arguments coming
// ...nums -> nums[]
function add(...nums) {
    console.log(nums);
    // out: [ 4, 2, 6, 1, 6, 4 ]
    for(num of nums) {
        console.log(`Num: ${num}`);
    }
}

add(4,2,6,1,6,4);