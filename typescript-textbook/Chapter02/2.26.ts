// const universe: {
//     [key in "sun" | "sirius" | "earth"]: { type: string, parent: string } | string
// } = {
//     sun: "star",
//     sriius: "star", // sirius 오타
//     earth: {
//         type: "planet",
//         parent: "sun",
//     },
// };

const universe = {
    sun: "star",
    sriius: "star",
    earth: {
        type: "planet",
        parent: "sun",
    },
}satisfies{
    [key in "sun" | "sirius" | "earth"]: { type: string, parent: string } | string
};
