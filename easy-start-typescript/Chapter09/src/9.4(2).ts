class Chatgpt {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sum(a: number, b: number): number {
        return a + b;
    }

}

let gpt = new Chatgpt("대화형 API");
gpt.sum(10, 20);