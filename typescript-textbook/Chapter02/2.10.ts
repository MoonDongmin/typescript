interface Example {
    hello: string;
    world?: number;
    readonly wow: boolean;
    readonly multiple?: symbol;
}

const example: Example = {
    hello: "hi",
    wow: false,
};

example.no;
example.wow = true;

// error 발생
interface Example2 {
    hello: string;
}

const example2: Example2 = {
    hello: "hi",
    why: "이건 에러야",
};

const obj = {
    hello: "hi",
    why: "이건 에러 아니야.",
};

const example3: Example2 = obj;
