type HelloAndHi = {
    [key: "hello" | "hi"]: string;
}

interface Original {
    name: string;
    age: number;
    married: boolean;
}

type Copy = {
    [key in keyof Original]: Original[key];
}
