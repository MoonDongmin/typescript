function arraySum(arr: readonly number[]) {
    let sum = 0, num;
    while ((num = arr.pop()) !== undefined) {
        // ~~~ 'readonly number[]' 형식에 pop 속성이 없음
        sum += num;
    }
    return sum;
}