export type IsAny<T> = string extends (number & T) ? true : false;
