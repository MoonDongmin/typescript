"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var buffer = (0, fs_1.readFileSync)('./package.json');
var content = buffer.toString();
console.log(content);
//# sourceMappingURL=readFileSync-test.js.map