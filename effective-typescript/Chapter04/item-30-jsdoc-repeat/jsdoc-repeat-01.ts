/**
 * 전경색 문자열을 반환함
 * 0개 또는 1개의 매개변수를 받음
 * 매개변수가 없을 때는 표준 전경색을 반환함
 * 매개변수가 있을 때는 특정 페이지의 전경색을 반환함
 */
function getForegroundColor(page?: string) {
    return page === "login" ? {
        r: 127,
        g: 127,
        b: 127,
    } : {
        r: 0,
        g: 0,
        b: 0,
    };
}