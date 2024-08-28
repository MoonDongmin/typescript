function add(a = 0, b = 0, c = 0, d = 0, e = 0) {
    return a + b + c + d + e;
}

const add0 = add.bind(null);
const add1 = add.bind(null, 1);
const add2 = add.bind(null, 1, 2);
const add3 = add.bind(null, 1, 2, 3);
const add4 = add.bind(null, 1, 2, 3, 4);
const add5 = add.bind(null, 1, 2, 3, 4, 5);
