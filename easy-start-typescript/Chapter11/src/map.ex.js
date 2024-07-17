var avengers = [
    {
        name: "capt",
        age: 100,
    },
    {
        name: "hulk",
        age: 47,
    },
    {
        name: "thor",
        age: 3900,
    },
];
var avengersNameArr = avengers.map(function (avenger) {
    return avenger.name;
});
console.log(avengersNameArr);
