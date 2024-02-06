type HeroNames2 = "capt" | "hulk" | "thor";
type HeroAttendance2 = {
    [Name in HeroNames]: boolean;
}

// #1
type HeroAttendance3 = {
    [HeroName in HeroNames]: boolean;
};

// #1
type HeroAttendance4 = {
    [name in HeroNames]: boolean;
};