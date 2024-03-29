function foo(x?: number | string | null) {
    if (!x) {
        x; // 타입이 string, number, null, undefined 중 하나
    }
}