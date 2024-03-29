function isInputElement(el: HTMLElement): el is HTMLInputElement {
    return "value" in el;
}

function getElementContent(el: HTMLElement) {
    if (isInputElement(el)) {
        el; // 타입이 HTMLInputElement
        return el.value;
    }
    el; // 타입이 HTMLElement
    return el.textContent;
}