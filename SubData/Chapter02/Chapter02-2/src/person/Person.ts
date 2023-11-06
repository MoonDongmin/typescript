import * as U from '../utils/makeRandomNumber'
export interface IPerson {
    name: string
    age: number
}

class Person implements IPerson {
    constructor(public name: string, public age: number) {
    }
}

// function makeRandomNumber(max: number = MAX_AGE): number {
//     return Math.ceil((Math.random() * max))
// }

export const makePerson = (name: string
    , age: number = U.makeRandomNumber()) => ({name, age})

// const testMakePerson = (): void => {
//     let jane: IPerson = makePerson('Jane')
//     let jake: IPerson = makePerson('Jack')
//     console.log(jane, jake)
// }
// testMakePerson()