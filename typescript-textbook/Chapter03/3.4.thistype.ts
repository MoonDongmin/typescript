// const obj = {
//     data: {
//         money: 0,
//     },
//     methods: {
//         addMoney(amount: number,
//         ) {
//             this.money += amount;
//         },
//         useMoney(amount: number) {
//             this.money -= amount;
//         },
//     },
// };
type Data = { money: number };
type Methods = {
    addMoney(this: Data & Methods, amount: number): void;
    useMoney(this: Data & Methods, amount: number): void;
};
type obj = {
    data: Data;
    methods: Methods;
};

const obj: obj = {
    data: {
        money: 0,
    },
    methods: {
        addMoney(amount) {
            this.money += amount;
        },
        useMoney(amount) {
            this.money -= amount;
        },
    },
};

// 중복 제거
type Data = { money: number };
type Methods = {
    addMoney(amount: number): void;
    useMoney(amount: number): void;
};
type Obj = {
    data: Data;
    methods: Methods & ThisType<Data & Methods>;
};

const obj: obj = {
    data: {
        money: 0,
    },
    methods: {
        addMoney(amount) {
            this.money += amount;
        },
        useMoney(amount) {
            this.money -= amount;
        },
    },
};
