// function printTextLength<T>(text: T) {
//     console.log(text.length);
// }

function printTextLength<T extends { length: number }>(text: T) {
    console.log(text.length);
}

function printTextLength2<T>(text: T[]) {
    console.log(text.length);
}

printTextLength<string>("hello");
printTextLength2<string>(["a", "b", "c"]);
printTextLength2<number>([100]);
printTextLength2([true, false]);