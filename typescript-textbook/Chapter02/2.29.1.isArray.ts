import {IsNever} from "./2.29.1.isNever";
import {IsAny}   from "./2.29.1.isAny";

type IsArray<T> = IsNever<T> extends true
    ? false
    : T extends readonly unknown[]
        ? IsAny<T> extends true
            ? false
            : true
        : false;
