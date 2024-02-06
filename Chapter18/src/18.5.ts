// ?
// @ts-ignore
type Hero = {
    name: string;
    skill: string;
};

type HeroOptional = {
    [H in keyof Hero]?: string;
}

// -
type HeroOptional2 = {
    name?: string;
    skill?: string;
};

type HeroRequired<T> = {
    [Property in keyof T]-?: T[Property];
};

let capt: HeroRequired<HeroOptional2> = {
    name: "캡틴",
    skill: "방패 던지기",
};