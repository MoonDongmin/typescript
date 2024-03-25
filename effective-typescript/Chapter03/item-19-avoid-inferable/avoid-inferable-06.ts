interface Product {
    id: number;
    name: string;
    price: number;
}

// function logProduct(product: Product) {
//     const id: number = product.id;
//     // string 형식은 number 형식에 할당할 수 없음
//     const name: string = product.name;
//     const price: number = product.price;
//     console.log(id, name, price);
// }

// logProduct 는 비구조화 할당문을 통해 구현하는 것이 좋음
function logProduct(product: Product) {
    const {
        id,
        name,
        price,
    }: { id: string, name: string, price: number } = product;
    console.log(id, name, price);
}