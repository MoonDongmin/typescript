function strOrNullUndefined(param: string | null | undefined) {
    if (typeof param === "undefined") {
        param;
    } else if (param) {
        param;
    } else {
        param;
    }
}

function strOrNullUndefined2(param: string | null | undefined) {
    if (param === undefined) {
        param;
    } else if (param === null) {
        param;
    } else {
        param;
    }
}

function trueOrFalse(param: boolean) {
    if (param) {
        param;
    } else {
        param;
    }
}

function strOrNumArr(param: string | number[]) {
    if (Array.isArray(param)) {
        param;
    } else {
        param;
    }
}
