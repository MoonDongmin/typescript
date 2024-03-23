"use strict";
async function checkedFetch(input, init) {
    const response = await fetch(input, init);
    if (!response.ok) {
        // 비동기 함수 내에서는 거절된 프로미스를 반환함
        throw new Error("Request failed: " + response.status);
    }
    return response;
}
