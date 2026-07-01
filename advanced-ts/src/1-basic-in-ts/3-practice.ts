import type {Equal, Expect} from "../index.ts";

async function fetchServerVersion(): Promise<number> {
    const response: Response = await fetch("https://api.example.com/v");

    const data: number = await response.json() as number;

    return data;
}

const example = async () => {
    const version: number = await fetchServerVersion();

    type test = Expect<Equal<typeof version, number>>;
}