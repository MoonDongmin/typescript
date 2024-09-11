type Literal = "literal";
type Template = `template ${Literal}`;
const str: Template = "template literal";


type Template2 = `template ${string}`;
let str2: Template2 = "template ";
str2 = "template hello";
str2 = "template 123";
// str2 = "template";
