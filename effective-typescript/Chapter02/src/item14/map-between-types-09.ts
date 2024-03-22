interface SaveAction {
    type: "save";
    // ...
}

interface LoadAction {
    type: "load";
    // ...
}

type Action = SaveAction | LoadAction;
// type ActionType = "save" | "load";  // 타입의 반복
type ActionType = Action['type'];  // 타입은 "save" | "load"