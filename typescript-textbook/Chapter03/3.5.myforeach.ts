[1, 2, 3].myForEach(() => {
});

interface Array<T> {
    myForEach(callback: (v: T, i: number, a: T[]) => void): void;
}
