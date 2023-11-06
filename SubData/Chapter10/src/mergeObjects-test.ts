import {mergeObjects} from "./mergeObjects";

type INameable = { name: string }
type IAgeable = { age: number }

const nameAndAge: INameable & IAgeable = mergeObjects({name: "Moon"}, {age: 24})
console.log(nameAndAge)