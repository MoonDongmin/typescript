function example(callback: (error: Error, result: string) => void) {
}

example((e, r) => {
});
example(() => {
});
example(() => true);

// forEach 메서드
[1, 2, 3].forEach((item, index, array) => {
    console.log(item, index, array);
});
[1, 2, 3].forEach((item, index) => {
});
[1, 2, 3].forEach((item) => item);
