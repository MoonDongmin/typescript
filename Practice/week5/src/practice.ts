/**
 * 우리는 한밭대학교에 있습니다. 교수 학생 직원이 있습니다.
 *  - 교수는 교수번호, 이름, 전화번호, 이메일, 연구실
 *  - 직원은 직원번호, 이름, 전화번호, 이메일, 사무실
 *  - 학생 학번, 이름, 전화번호, 이메일, 학적
 *  - 학부 / 학생
 *  - 이것을 클래스로 각각 대상별로 객체를 생상해 객체의 정보를 출력해라.
 *  공통속성: 이름, 전화번호, 이메일
 * */

class People {
    #name: string;
    #phoneNumber: number;
    #email: string;

    constructor(name: string, phoneNumber: number, email: string) {
        this.#name = name;
        this.#phoneNumber = phoneNumber;
        this.#email = email;
    }

    public introduce() {
        console.log("이름: " + this.#name + ", 전화번호: " + this.#phoneNumber + ", 이메일: " + this.#email);
    }
}

class Professor1 extends People {
    #professorNumber: number;
    #lab: string;

    constructor(professorNumber: number, name: string, phoneNumber: number, email: string, lab: string) {
        super(name, phoneNumber, email);
        this.#professorNumber = professorNumber;
        this.#lab = lab;
    }

    public introduce() {
        super.introduce();
        console.log("+ 교수 번호: " + this.#professorNumber + ", 연구실: " + this.#lab);
    }
}


class Employee1 extends People {
    #empNumber: number;
    #office: string;

    constructor(empNumber: number, name: string, phoneNumber: number, email: string, office: string) {
        super(name, phoneNumber, email);
        this.#empNumber = empNumber;
        this.#office = office;
    }

    public introduce() {
        super.introduce();
        console.log("+ 직원 번호: " + this.#empNumber + ", 사무실: " + this.#office);
    }
}

class Student1 extends People {
    #studentNumber: number;
    #degree: string;

    constructor(studentNumber: number, name: string, phoneNumber: number, email: string, degree: string) {
        super(name, phoneNumber, email);
        this.#studentNumber = studentNumber;
        this.#degree = degree;
    }

    public introduce() {
        super.introduce();
        console.log("+ 학번: " + this.#studentNumber + ", 학위: " + this.#degree);
    }
}

class Master1 extends People {
    #masterNumber: number;
    #degree: string;

    constructor(masterNumber: number, name: string, phoneNumber: number, email: string, degree: string) {
        super(name, phoneNumber, email);
        this.#masterNumber = masterNumber;
        this.#degree = degree;
    }

    public introduce() {
        super.introduce();
        console.log("+ 학번: " + this.#masterNumber + ", 학위: " + this.#degree);
    }
}

let person = new People("문동민", 1064558761, "water8760@naver.com");
person.introduce();

let professor1 = new Professor1(123, "박현주", 12345, "@hanbat.ac.kr", "wisoft");
professor1.introduce();

let student1 = new Student1(20191836, "문동민", 12345, "water_8760@naver.com", "학부");
student1.introduce();


