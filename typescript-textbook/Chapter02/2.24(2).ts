type InfiniteRecur<T> = { item: InfiniteRecur<T> };

type Unwrap<T> = T extends { item: infer U } ? Unwrap<U> : T;

// error
// type Result = Unwrap<InfiniteRecur<any>>;
