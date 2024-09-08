class A {
    callbackWithThis(cb: (this: this) => void) {
        cb.call(this);
    }

    callbackWithoutThis(cb: () => void) {
        cb();
    }
}

new A().callbackWithThis(function () {
    this;
});

new A().callbackWithoutThis(function () {
    this;
});
