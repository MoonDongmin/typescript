type Captain = {
    name: string;
}

interface Antman {
    name: string;
}

let a: Captain = {
    name: "캡틴",
};

let b: Antman = {
    name: "앤트맨",
};

b = a;
