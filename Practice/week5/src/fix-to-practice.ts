// 부모 클래스
class Person {
    name: string;
    tel: string;
    email: string;

    constructor(name: string, tel: string, email: string) {
        this.name = name;
        this.tel = tel;
        this.email = email;
    }

    protected getInfo(): {
        name: string,
        tel: string,
        email: string
    } {
        return {
            name: this.name,
            tel: this.tel,
            email: this.email
        };
    }


}

// Professor 클래스
type ProfessorId = string;

class Professor extends Person {
    id: ProfessorId;
    lab: string;

    constructor(id: ProfessorId, name: string, phoneNumber: string, email: string, lab: string) {
        super(name, phoneNumber, email);
        this.id = id;
        this.lab = lab;
    }

    public getInfo() {
        return {
            ...super.getInfo(),
            professorNumber: this.id,
            lab: this.lab
        }
    }

}

// Employee 클래스
type EmpId = string;

class Employee extends Person {

    id: EmpId;
    office: string;

    constructor(id: EmpId, name: string, phoneNumber: string, email: string, office: string) {
        super(name, phoneNumber, email);
        this.id = id;
        this.office = office;
    }


    public getInfo() {
        return {
            ...super.getInfo(),
            employeeNumber: this.id,
            office: this.office
        }
    }
}

// Student 클래스
type StudentId = string;

class Student extends Person {
    id: StudentId;
    status: string;

    constructor(id: StudentId, name: string, phoneNumber: string, email: string, status: string) {
        super(name, phoneNumber, email);
        this.id = id;
        this.status = status;
    }

    public getInfo() {
        return {
            ...super.getInfo(),
            id: this.id,
            status: this.status
        }
    }
}

type Imsi = Person & (Professor | Employee | Student)

function printTest<T extends Imsi>(info: T) {
    console.log(
        `Id :  ${info.id} \nName : ${info.name} \nTel : ${info.tel} \nEmail : ${info.email}`,
        info instanceof Professor ? `\nLab : ${info.lab}` : info instanceof Employee ?
            `\nOffice : ${info.office}` : info instanceof Student ?  `\nStatus : ${info.status}` :"에러"
    );
}


// // dong
// function print2<T extends {}>(person: T) {
//     // const info={
//     //     name:'이름',
//     //     age: '나이',
//     //     email: '이메일',
//     //     professorNumber: '교수 번호',
//     //     status:'학적',
//     //     employeeNumber: '직원 번호',
//     //     office: '사무실'
//     // }
//     console.log(Object.entries(person).map(([i, v]) => `${i}: ${v}`).join(", \n"));
// }


// 객체 생성 및 출력
const professor = new Professor("1", "라이언", "010-1234-1234", "ryan@kakao.com", "kakao");
printTest(professor);

const employee = new Employee("2", "춘식이", "010-1234-4567", "choonsik@kakao.com", "kakaofriends");
printTest(employee);

const student = new Student("3", "프로도", "010-1234-5678", "prodo@kakao.com", "학부생");
printTest(student);

const student2 = new Student("4", "무지", "010-1234-5678", "muji@kakao.com", "대학원생");
printTest(student2);