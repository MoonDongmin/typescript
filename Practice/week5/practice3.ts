class University {
    public universityName: string;
    protected id: string;
    protected phoneNumber: number;
    protected name: string;
    protected email: string;

    constructor(universityName: string) {
        this.universityName = universityName;
        console.log("대학교이름: " + universityName);
    }
}

class Professor extends University {
    #professorNumber: number;
    public name: string;
    protected phoneNumber: number;
    public email: string;
    public lab: string;

    constructor(universityName: string, professorNumber: number, name: string, phoneNumber: number, email: string, lab: string) {
        super(universityName);
        this.#professorNumber = professorNumber;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.lab = lab;
        console.log("교수님 이름: " + this.name + ", 전화번호: " + this.phoneNumber
            + ", 이메일: " + this.email + ", 연구실: " + this.lab);
    }
}

class Employee extends University {
    #empNumber: number;
    public name: string;
    protected phoneNumber: number;
    public email: string;
    public office: string;

    constructor(universityName: string, professorNumber: number, name: string, phoneNumber: number, email: string, office: string) {
        super(universityName);
        this.#empNumber = professorNumber;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.office = office;
        console.log("직원 이름: " + this.name + ", 전화번호: " + this.phoneNumber
            + ", 이메일: " + this.email + ", 사무실: " + this.office);
    }
}

class Student extends University {
    #studentNumber: number;
    public name: string;
    protected phoneNumber: number;
    public email: string;
    public degree: string;

    constructor(universityName: string, studentNumber: number, name: string, phoneNumber: number, email: string, degree: string) {
        super(universityName);
        this.#studentNumber = studentNumber;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.degree = degree;
        console.log("학생 이름: " + this.name + ", 전화번호: " + this.phoneNumber
            + ", 이메일: " + this.email + ", 학위: " + this.degree);
    }
}

class Master extends University {
    #masterNumber: number;
    public name: string;
    protected phoneNumber: number;
    public email: string;
    public degree: string;

    constructor(universityName: string, masterNumber: number, name: string, phoneNumber: number, email: string, degree: string) {
        super(universityName);
        this.#masterNumber = masterNumber;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.degree = degree;
        console.log("학생 이름: " + this.name + ", 전화번호: " + this.phoneNumber
            + ", 이메일: " + this.email + ", 학위: " + this.degree);
    }
}

new University("국립한밭대학교");
console.log();
new Professor("국립한밭대학교", 1234, "박현주", 1234, "asdf@naver.com", "wisoft");
console.log();
new Employee("국립한밭대학교", 456, "김민수", 456, "456@naver.com", "정보통신공학과");
console.log();
new Student("국립한밭대학교", 20191836, "문동민", 789, "789@naver.com", "학부");
console.log();
new Master("국립한밭대학교", 20231836, "문동준", 101112, "101112@naver.com", "석사");
