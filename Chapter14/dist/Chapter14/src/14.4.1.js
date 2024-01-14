"use strict";
function isPerson(someone) {
    return someone.age !== undefined;
}
function greet(someone) {
    if (isPerson(someone)) {
        console.log("사람의 나이는 ", someone.age);
    }
    else {
        console.log("개발자의 스킬은 ", someone.skill);
    }
}
