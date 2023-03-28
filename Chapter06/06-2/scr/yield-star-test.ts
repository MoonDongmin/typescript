import {gen12345} from "./yield-star";

for(let value in gen12345())
    console.log(value)