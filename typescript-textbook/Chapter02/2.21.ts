enum Level {
    NOVICE = 3,
    INTERMEDIATE,
    ADVANCED = 7,
    MASTER
}

enum Level2 {
    NOVICE,
    INTERMEDIATE = "HELLO",
    ADVANCED = "oh",
    //MASTER
}

enum Level3 {
    NOVICE,
    INTERMEDIATE,
    ADVANCED,
    MASTER
}

const a = Level3.NOVICE;
const b = Level[Level3.NOVICE];

function whatsYourLevel(level: Level3) {
    console.log(Level3[level]);
}

const myLevel = Level3.ADVANCED;
whatsYourLevel(myLevel);
