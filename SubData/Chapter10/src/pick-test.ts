import {pick} from "./pick";

const obj = {name: 'jack', age: 24, city: 'Daejeon', country: 'Korea'}
console.log(
    pick(obj, ['name', 'age']),
    pick(obj, ['name', 'age'])
)