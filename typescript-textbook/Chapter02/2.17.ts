// function add(x: string | number, y: string | number): string | number {
//     return x + y;
// }
//
// add(1, 2);
// add("1", "2");
// add(1, "2");
// add("1", 2);

// 오버로딩
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: any, y: any) {
    return x + y;
}

add(1, 2);
add("1", "2");
add(1, "2");
add("1", 2);

// 오버로딩 순서도 영향을 끼침
function example(param: string): string;
function example(param: string | null): number;
function example(param: string | null): string | number {
    if (param) {
        return "string";
    } else {
        return 123;
    }
};

const result = example("what");
