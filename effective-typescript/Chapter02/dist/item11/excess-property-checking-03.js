"use strict";
function setDarkMode() {
}
function createWindow(options) {
    if (options.darkMode) {
        setDarkMode();
    }
    // ...
}
createWindow({
    title: "Spider Solitaire",
    darkmode: true,
    // ~~~~~~~~~~~~~ 객체 리터럴은 알려진 속성만 지정할 수 있지만
    //               Options 형식에 darkmode 가 없음.
    //               darkMode를 쓰려고 했습니까?
});
const o1 = document;
const o2 = new HTMLAnchorElement();
const intermediate = {
    darkmode: true,
    title: "Ski Free",
};
const o = intermediate;
const o3 = {
    darkmode: true,
    title: "Ski Free",
};
