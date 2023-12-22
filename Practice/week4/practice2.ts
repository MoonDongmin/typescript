// 내가 적은 것
// function changeSlugForm(input: string): string {
//     const words: string = input.split(" ").join("-").toLowerCase();
//     // const words: string = input.replace( /\s/g,"-");
//     // const words: string = input.replace(" ","-");
//     return words;
// }

// 고친 내용
const log = console.log;

function stringToSlug(message: string): string {
    // const words: string = message.split(" ").join("-").toLowerCase();
    // const words: string = input.replace( /\s/g,"-");
    // const words: string = input.replace(" ","-");
    return message.split(" ").join("-").toLowerCase();
}

// const message: string = "Hello my name is Dongmin 2023";
const result: string = stringToSlug("Hello my name is Dongmin 2023");
log(result);
/**
 * 내장 메서드를 잘 써보자고
 */