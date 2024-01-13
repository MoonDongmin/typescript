import {B} from "../../SubData/Chapter04/04-6/B";

let book = {
    name: "길벗 타입스크립트",
    rank: 1,
};

console.log("name" in book);
console.log("address" in book);

interface Book {
    name: string;
    rank: number;
}

interface OnlineLecture {
    name: string;
    url: string;
}

function learnCourse(material: Book | OnlineLecture) {
    if( 'name' in material){
        // material의 타입이 OnlineLecture 타입으로 간주
        material
    }
    // ...
}