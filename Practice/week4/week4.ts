const uri = "https://fakestoreapi.com/products/1";

// 고친 코드
type Id = number | string;

type Money = number;

type Url = string;

type Ratio = number;

type Integer = number;

type Rating = {
    rate: Ratio;
    count: Integer;
}

type ProductInfo = {
    id: Id;  // number 말고, 다른 값으로 넣어도 되지 않을까?(별도로 뽑아)
    title: string;
    price: Money; // 타입을 money 이런식으로 바꿔봐라
    description: string;
    category: string;
    image: Url;
    rating: Rating;
}

// 기존 내 코드
// type image = {
//     image: URL;
// }

// @ts-ignore
async function Data(uri: string): Promise<ProductInfo> {
    const response = await fetch(uri);
    const data = await response.json();
    return data;
}


Data(uri)
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error("Error:", error));
