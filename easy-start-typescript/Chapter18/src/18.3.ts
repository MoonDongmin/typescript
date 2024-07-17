// @ts-ignore
interface Hero {
    name: string;
    skill: string;
}

// 둘 다 같은 의미
// type HeroNames1 = keyof Hero;
// type HeroNames2 = "name" | "skill";

// @ts-ignore
type HeroPropCheck = {
    [H in keyof Hero]: boolean;
}

// 위의 코드와 동일함
// type HeroPropCheck={
//     [H in 'name'|'skill']: boolean;
// }