class A {
}

class B {
}

function classAorB(param: A | B) {
    if (param instanceof A) {
        param;
    } else {
        param;
    }
}
