"use strict";
function greet(someone) {
    switch (someone.industry) {
        case "common":
            console.log(someone.age.toFixed(2));
            break;
        case "tech":
            console.log(someone.age.split(""));
            break;
    }
}
