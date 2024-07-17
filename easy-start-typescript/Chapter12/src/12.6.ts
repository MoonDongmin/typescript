interface Dropdown<T> {
    title: string;
    value: T;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    tag: string;
    description: string;
}

// interface DetailedDropdown {
//     tag: string;
//     description: string;
//     title: string;
//     value: string;
// }

let shoppingDetailItem: DetailedDropdown<number> = {
    title: "길벗 책",
    description: " 쉽고 유용하다",
    tag: "타입스크립트",
    value: 1,
};