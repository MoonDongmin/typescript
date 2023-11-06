import {IPerson, makePerson} from "./person/Person"

const testMakePerson = ():void=>{
    let jane: IPerson = makePerson('jane')
    let jack: IPerson = makePerson('Jack')
    console.log(jane,jack)
}

testMakePerson()