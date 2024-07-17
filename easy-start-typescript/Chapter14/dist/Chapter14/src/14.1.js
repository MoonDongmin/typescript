"use strict";
function updateInput(textInput) {
    // 타입 가드
    if (typeof textInput === "number") {
        textInput.toFixed();
    }
}
