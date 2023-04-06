import {mergedArray} from './mergedArray';

const mergedArray1: string[] = mergedArray(
    ['Hello'], ['World']
)

console.log(mergedArray1);

const mergedArray2: number[] = mergedArray(
    [1], [2, 3], [4, 5, 6,], [7, 8, 9, 10]
)

console.log(mergedArray2);
