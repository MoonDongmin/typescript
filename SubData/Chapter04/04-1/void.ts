function printMe(name: string, age: number): void {
    console.log(`name:${name}, age:${age}`)
}

let printMe2: (string, number) => void = function (name: string, age: number): void {}