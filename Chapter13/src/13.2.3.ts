// 1. as 키워드는 구문 오른쪽에서만 사용한다
// let num as number = 10;

let num2 = 10 as number;

// 위의 코드는 타입 표기로 타입을 지정해 주는 것이 좋음
let num3: number = 10;

// 2. 호환되지 않는 데이터 타입으로는 단언할 수 없음
// let num4 = 10 as string;
let a: any = 10;
let b: any = "hi";

// bookName 변수는 string 타입과 any 탕입 모두 선언할 수 있음
let bookName1: string = "길벗 타입스크립트";
let bookName2: any = "길벗 타입스크립트";

// 3. 타입 단언 남용하지 않기
interface Profile {
    name: string;
    id: string;
}

function getProfile() {
    // ...
}

// @ts-ignore
let myProfile = getProfile() as Profile;
// @ts-ignore
renderId(myProfile.id);
