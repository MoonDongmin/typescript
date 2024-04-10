function extent(nums: number[]) {
    let min, max;
    for (const num of nums) {
        if (!min) {
            min = num;
            max = num;
        } else {
            min = Math.min(min, num);
            max = Math.max(max, num);
            //             ~~~ 'number | undefined' 형식의 인수는
            //             'number' 형식의 매개변수에 할당될 수 없음
        }
    }
    return [min, max];
}

const [min, max] = extent([0, 1, 2]);
const span = max - min;