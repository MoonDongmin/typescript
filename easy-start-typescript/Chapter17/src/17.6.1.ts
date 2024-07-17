type HeroProfile = {
    skill: string;
    age: number;
}

type HeroNames = "thor" | "hulk" | "capt";

type Heroes = Record<HeroNames, HeroProfile>;

let avengers: Heroes = {
    capt: {
        skill: "방패 던지기",
        age: 100,
    },
    thor: {
        skill: "번개",
        age: 3000,
    },
    hulk: {
        skill: "괴성",
        age: 47,
    },
};