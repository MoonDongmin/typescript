"use strict";
function updateInput(textInput) {
    if (typeof textInput === "number") {
        textInput.toFixed(2);
        return;
    }
    if (typeof textInput === "string") {
        console.log(textInput.length);
        return;
    }
}
