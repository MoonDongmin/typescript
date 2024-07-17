// function shuffleBooks(books) {
//     if (books === null || books === undefined) {
//         return;
//     }
//     let result = books.shuffle();
//     return result;
// }
//
// shuffleBooks();

// 위의 코드 타입 입히기
interface Books {
    shuffle: Function;
}

function shuffleBooks(books: Books | null) {
    let result = books!.shuffle();
    return result;
}

// function shuffleBooks(books: Books | null) {
//     if(books===null || books===undefined){
//         return;
//     }
//     let result = books.shuffle();
//     return result;
// }