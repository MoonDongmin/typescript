const el = document.getElementById("foo"); // type is HTMLElement | null
if (typeof el === "object") {
    el;  // 타입이 HTMLElement | null
}