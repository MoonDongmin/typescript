import {Bird, Fish}  from "./BirdAndFish";
import {isFlyalbe}   from "./isFlyable";
import {isSwimmable} from "./isSwimmable";

export const swimOrFly = (o: Fish | Bird) => {
    if (isSwimmable(o))
        o.swim()
    else if (isFlyalbe(o))
        o.fly()
}