declare let hasMiddle: boolean;
const nameTitle = {
    name: "Dongmin",
    title: "hi",
};
const pharaoh = {
    ...nameTitle,
    ...(hasDates ? {
        start: -2589,
        end: -2566,
    } : {}),
};