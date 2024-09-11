type Recursive = {
    name: string;
    children: Recursive[];
}

const recur1: Recursive = {
    name: "test",
    children: [],
};

const recur2: Recursive = {
    name: "test",
    children: [
        {
            name: "test2",
            children: [],
        },
        {
            name: "test3",
            children: [],
        },
    ],
};
