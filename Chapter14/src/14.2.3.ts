function updateInput(textInput: number | string | boolean) {
    if (typeof textInput === "number") {
        textInput.toFixed(2);
        return;
    }
    if (typeof textInput === "string") {
        console.log(textInput.length);
        return;
    }
}