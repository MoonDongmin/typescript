// typeof 10;
// typeof "hello";
// typeof function () {
// };

function printText(text: string | number) {
    if (typeof text === "string") {
        // text는 string 으로 간주
        console.log(text.trim());
    }

    if (typeof text === "number") {
        // 여기서는 number로 간주
    }
}