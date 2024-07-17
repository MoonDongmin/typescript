// function sayHi(message: string | null) {
//     if (message!.length >= 3) {
//         console.log(message);
//     }
// }

// function sayHi(message: string | null) {
//     if (message === null) {
//         return;
//     }
//     if (message!.length >= 3) {
//         console.log(message);
//     }
// }

function sayHi(message: string | null) {
    if (message && message.length >= 3) {
        console.log(message);
    }
}