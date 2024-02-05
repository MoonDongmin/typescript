interface Todo {
    id: string;
    title: string;
}

type OptionalTodo = Partial<Todo>;

let nothing: OptionalTodo = {};
let onlyId: OptionalTodo = {id: "아이디만"};
let onlyTitle: OptionalTodo = {title: "제목만"};
let todo: OptionalTodo = {
    id: "1",
    title: "Partial 배우기",
};
