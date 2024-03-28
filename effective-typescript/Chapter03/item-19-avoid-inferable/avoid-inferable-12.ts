const cache: { [ticker: string]: number } = {};

function getQuote(ticker: string): Promise<number> {
    if (ticker in cache) {
        return cache[ticker];
        // ~~~~~~~~~~~~~ number는 Promise<number> 형식에 할당할 수 없음
    }
    // COMPRESS
    return Promise.resolve(0);
    // END
}
