interface Room {
    numDoors: number;
    ceilingHeightFt: number;
}

function setDarkMode() {
}

interface Options {
    title: string;
    darkMode?: boolean;
}

function createWindow(options: Options) {
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

const o1: Options = document;
const o2: Options = new HTMLAnchorElement();

const intermediate = {
    darkmode: true,
    title: "Ski Free",
};
const o: Options = intermediate;

const o3: Options = {
    darkmode: true,
    title: "Ski Free",
} as Options;