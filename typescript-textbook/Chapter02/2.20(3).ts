class Parent {
    name?: string;
    readonly age: number;
    protected married: boolean;
    private value: number;

    constructor(name: string, age: number, married: boolean) {
        this.name = name;
        this.age = age;
        this.married = married;
        this.value = 0;
    }

    // error 발생 age는 readonly이기 때문에 값을 바꿀 수 없음
    // changeAge(age: number) {
    //     this.age = age;
    // }

}

class Child extends Parent {
    constructor(name: string, age: number, married: boolean) {
        super(name, age, married);
    }

    sayName() {
        console.log(this.name);
    }

    sayMarried() {
        console.log(this.married);
    }

    // error value는 부모 클래스에서 private로 선언했기 떄문
    // sayValue(){
    //     console.log(this.value());
    // }

}

const child = new Child("dongmin", 25, false);
child.name;
// child.married;
// child.value;

