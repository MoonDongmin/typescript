type JSONType =
    | string
    | boolean
    | number
    | null
    | JSONType[]
    | { [key: string]: JSONType };

const a: JSONType = "string";
const b: JSONType = [1, false, {"hi": "json"}];
const c: JSONType = {
    prop: null,
    arr: [{}],
};
