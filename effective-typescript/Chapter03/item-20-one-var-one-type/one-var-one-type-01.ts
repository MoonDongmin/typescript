function fetchProduct(id: string) {
}

function fetchProductBySerialNumber(id: number) {
}

let id = "12-34-56";
fetchProduct(id);

id = 123456;
// ~~ '123456' 형식은 string 형식에 할당할 수 없습니다
fetchProductBySerialNumber(id);
//                         ~~ 'string' 형식의 인수는
//                            'number' 형식의 매개변수에 할당될 수 없음
