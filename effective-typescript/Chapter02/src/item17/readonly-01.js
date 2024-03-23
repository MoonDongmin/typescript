function arraySum(arr) {
    var sum = 0, num;
    while ((num = arr.pop()) !== undefined) {
        sum += num;
    }
    return sum;
}
function printTriangles(n) {
    var nums = [];
    for (var i = 0; i < n; i++) {
        nums.push(i);
        console.log(arraySum(nums));
    }
}
printTriangles(5);
