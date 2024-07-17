interface Todo {
    id: string;
    title: string;
    checked: boolean;
}

// @ts-ignore
function updateTodo(todo: Partial<Todo>) {
    // ...
}

updateTodo({id: "1"});
updateTodo({
    id: "1",
    title: "Partail 학습",
});
updateTodo({
    id: "1",
    title: "Partail 학습",
    checked: true,
});

// function updateTodo(todo: Todo) {
//     // ...
// }

// id 속성만 넘기는 경우
// function updateTodo(todo: { id: string }) {
//     // ...
// }

// id 속성만 넘기는 경우 - Pick
// function updateTodo(todo: Pick<Todo, 'id'>) {
//     // ...
// }

// id와 checked 속성만 넘기는 경우
// function updateTodo(todo: { id: string; checked: string }) {
//     // ...
// }

// id와 checked 속성만 넘기는 경우 - Omit
// function updateTodo(todo: Omit<Todo, 'checked'>) {
//     // ...
// }

// 할 일 데이터의 정의된 모든 값을 넘기는 경우
// function updateTodo(todo: { id: string; checked: string; title: string }) {
//     // ...
// }
// function updateTodo(todo:Todo) {
//     // ...
// }
