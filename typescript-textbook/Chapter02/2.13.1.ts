interface Money {
    amount: number;
    unit: string;
}

interface Liter {
    amount: number;
    unit: string;
}

const liter: Liter = {
    amount: 1,
    unit: "liter",
};
const circle: Mony = liter;

// 구조적으로 동일하지 않게 만들기
interface Money {
    __type: "money";
    amount: number;
    unit: string;
}

interface Liter {
    __type: "liter";
    amount: number;
    unit: string;
}

const liter: Liter = {
    amount: 1,
    unit: "liter",
    __type: "liter",
};
const circle: Money = liter; // error
