// interface Todo {
//     id: string;
//     title: string;
// }
//
// type OptionalTodo = Partial<Todo>;
// 위의 코드를 맵드 타입과 매핑 수정자를 이용하여 작성한다면

interface Todo {
    id: string;
    title: string;
}

// type MyPartial = {
//     [Property in keyof Todo]?: Todo[Property];
// }
type MyPartial<Type> = {
    [Property in keyof Type]?: Type[Property];
}



// Person 타입
interface Person {
    name: string;
    age: number;
}

// type PersonPartial = {
//     [Property in keyof Person]?: Person[Property];
// };

// Hero 타입
// @ts-ignore
type Hero = {
    name: string;
    skill: string;
}
// type HeroPartial = {
//     [Property in keyof Hero]?: Hero[Property];
// };

type TodoPartial = MyPartial<Todo>;
type PersonPartial = MyPartial<Person>;
type HeroPartial = MyPartial<Hero>;

