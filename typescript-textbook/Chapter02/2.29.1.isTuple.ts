import {IsNever} from "./2.29.1.isNever";

type IsTuple<T> = IsNever<T> extends true
    ? false
    : T extends readonly unknown[]
        ? number extends T["length"]
            ? false
            : true
        : false;
