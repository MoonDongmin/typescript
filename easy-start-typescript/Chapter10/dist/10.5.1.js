"use strict";
function embraceEverything(thing) {
    return thing;
}
embraceEverything("hi");
// error
// embraceEverything<number>(100);
// embraceEverything<boolean>(false);
// embraceEverything<{ name: string }>({name: "capt"});
