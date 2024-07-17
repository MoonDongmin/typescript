// 제네릭의 타입을 string으로 제약한 코드
function embraceEverything2<T extends string>(thing: T): T {
    return thing;
}

// 위의 코드와 같은 역할을 하는 코드
function embraceEverything3(thing: string): string {
    return thing;
}

function lengthOnly<T extends { length: number }>(value: T) {
    return value.length;
}

lengthOnly("hi");
lengthOnly([1, 2, 3]);
lengthOnly({
    title: "abc",
    length: 123,
});
// lengthOnly(100);

