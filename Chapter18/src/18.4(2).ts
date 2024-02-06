// 인터페이스 타입으로 맵드 타입을 생성
// @ts-ignore
interface Hero {
    name: string;
    skill: string;
}

// @ts-ignore
type HeroPropCheck = {
    [H in keyof Hero]: boolean;
}

// 타입 별칭으로 맵드 타입을 생성
type Hero2 = {
    name: string;
    skill: string;
}

type HeroPropCheck2 = {
    [H in keyof Hero]: boolean;
}

// string 타입에 맵드 타입 문법을 적용하여 새로운 타입을 생성할 수 있음
type UserName = string;
type AddressBook = {
    [U in UserName]: number;
}
let heroAddress: AddressBook = {
    cap: 123123123,
    hulk: 345345345,
};

// 다음과 같은 경우는 불가능
type Login = boolean;
// type LoginAuth = {
//     [L in Login]: string;
// }