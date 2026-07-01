type Region = "north" | "south" | "east" | "west";

type Sub = { temperature: number, precipitation: number };

type RegionalForecasts = Record<Region, Sub>;

// Adding a property not in Region (e.g. "central") is not allowed.
export const forecasts: RegionalForecasts = {
    north: {
        temperature: -5,
        precipitation: 30,
    },
    south: {
        temperature: 20,
        precipitation: 10,
    },
    east: {
        temperature: 15,
        precipitation: 20,
    },
    west: {
        temperature: 10,
        precipitation: 40,
    },
    // @ts-expect-error: "central" is not an allowed region.
    central: {
        temperature: 12,
        precipitation: 25,
    },
};
