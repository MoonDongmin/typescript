// function greet(who: string) {
//     console.log("Hello", who);
// }
//
// let city = "new york city";
// console.log(city.toUpperCase());

// 예제
interface State {
    name: string;
    capital: string;
}

const states: State[] = [
    {
        name: "Alabama",
        capital: "Montgomery",
    },
    {
        name: "Alaska",
        capital: "Juneau",
    },
    {
        name: "Arizona",
        capital: "Phoenix",
    },
    // ...
];

for (const state of states) {
    console.log(state.capital);
}

// 예제
const x = 2 + "3";
const y = "2" + 3;

// const a = null + 7;
// const b = [] + 12;
// alert("Hello", "TypeScript");