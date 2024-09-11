type City = "seoul" | "suwon" | "busan";

type Vehicle = "car" | "bike" | "walk";
type ID = `${City}:${Vehicle}`;
const id = "seoul:walk";
