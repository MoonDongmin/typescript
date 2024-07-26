// type Animal = {
//     name: string;
// }
//
// type N = string;

type Animal = {
    name: string;
}

type N1 = Animal["name"];
type N2 = Animal["name"];
type N3 = Animal.name;

// 객체의 메서드 선언하는 3가지 방법
interface Example {
    a(): void;

    b: () => void;
    c: {
        (): void;
    };
}
