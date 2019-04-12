function add(...nums) {
    totalBeforeArrowFunction = nums.reduce( function(previousValue, currentValue) {
        return previousValue + currentValue;
    });
    console.log(totalBeforeArrowFunction);
    // out: 25

    totalAfterArrowFunction = nums.reduce((previousValue, currentValue) => previousValue + currentValue);
    console.log(totalAfterArrowFunction);
    // out: // 25
}

add(6,8,2,9); 