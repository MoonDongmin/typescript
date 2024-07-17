"use strict";
var Language;
(function (Language) {
    Language[Language["C"] = 0] = "C";
    Language[Language["Java"] = 1] = "Java";
    Language[Language["TypeScript"] = 2] = "TypeScript";
})(Language || (Language = {}));
let a = 10;
a = Language.C;
