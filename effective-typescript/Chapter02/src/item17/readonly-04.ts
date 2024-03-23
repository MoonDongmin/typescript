function arraySum(arr: readonly number[]) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

arraySum([1,2,3,4]);