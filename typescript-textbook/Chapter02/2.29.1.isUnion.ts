import {IsNever} from "./2.29.1.isNever";

type IsUnion<T, U = T> = IsNever<T> extends true
    ? false
    : T extends T
        ? [U] extends [T]
            ? false
            : true
        : false;
