function startAndEnd(originalMethod: any, context: any) {
    function replacementMethod(this: any, ...args: any[]) {
        console.log("start");
        const result = originalMethod.call(this, ...args);
        console.log("end");
        return result;
    }

    return replacementMethod;
}

class A {
    @startAndEnd
    eat() {
        console.log("Eat");
    }

    @startAndEnd
    work() {
        console.log("Work");
    }

    @startAndEnd
    sleep() {
        console.log("Sleep");
    }
}

