function neverFunc1() {
    throw new Error("에러");
}

const result1: never = neverFunc1();
const neverFunc2 = () => {
    throw new Error("에러");
};
const result2 = neverFunc2();

const infinite = () => {
    while (true) {
        console.log("무한 반복됩니다.");
    }
};

// never를 직접 써야 할 상황도 있음
function neverFunc(): never {
    throw new Error("에러");
}

function infinite2(): never {
    while (true) {
        console.log("무한 반복됩니다.");
    }
}
