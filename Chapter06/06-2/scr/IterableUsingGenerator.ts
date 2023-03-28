export class IterableUsingGenerator<T> implements Iterable<T> {
    constructor(private values: T[] = [], currentIndex: number = 0) {
    }

    [Symbol.iterator] = function* () {
        while (this.currentIndex < this.values.length)
            yield this.values[this.currentIndex++]
    }
}