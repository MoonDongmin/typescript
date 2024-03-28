interface Product {
    id: string;
    name: string;
    price: number;
}

function logProduct(product: Product) {
    const id: number = product.id;
    // ~~ Type 'string' is not assignable to type 'number'
    const name: string = product.name;
    const price: number = product.price;
    console.log(id, name, price);
}

const elmo: Product = {
    name: "Tickle Me Elmo",
    id: "048188 627152",
    price: 28.99,
};

// 타입 오류 발생
// const furby = {
//     name: 'Furby',
//     id: 630509430963,
//     price: 35,
// };

const furby: Product = {
    name: 'Furby',
    id: 630509430963,
//  ~~ number 형식은 string에 할당할 수 없음
    price: 35,
};
logProduct(furby);
//         ~~~~~  ... 형식의 인수는 Product 형식의 매개변수에 할당될 수 있음
//         id 속성의 형식이 호환되지 않음
//        number 형식은 string 형식에 할당할 수 없음