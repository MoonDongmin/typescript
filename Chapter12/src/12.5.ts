interface Dropdown<T> {
    title: string;
    value: T;
}

// interface Dropdown {
//     title: string;
//     value: number;
// }

let shoppingItem: Dropdown<number> = {
    title: "문동민",
    value: 10,
};