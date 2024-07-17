class Chatgpt {
    constructor(name) {
        this.name = name;
    }

    sum(a, b) {
        return a + b;
    }

}

let gpt = new Chatgpt('대화형 API');
gpt.sum(10, 20);