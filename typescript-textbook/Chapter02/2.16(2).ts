function example1() {
    console.log(this);
}

function example2(this: Window) {
    console.log(this);
}

function example3(this: Document, a: string, b: "this") {
}

example3("hello", "this");
example3.call(document, "hello", "this");

