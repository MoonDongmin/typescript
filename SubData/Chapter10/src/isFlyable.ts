import {Bird, Fish} from "./BirdAndFish";

export const isFlyalbe = (o: Bird | Fish): o is Bird => {
    return o instanceof Bird
}