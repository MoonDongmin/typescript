"use strict";
/**
 * 우리는 한밭대학교에 있습니다. 교수 학생 직원이 있습니다.
 *  - 교수는 교수번호, 이름, 전화번호, 이메일, 연구실
 *  - 직원은 직원번호, 이름, 전화번호, 이메일, 사무실
 *  - 학생 학번, 이름, 전화번호, 이메일, 학적
 *  - 학부 / 학생
 *  - 이것을 클래스로 각각 대상별로 객체를 생상해 객체의 정보를 출력해라.
 *  공통속성: 이름, 전화번호, 이메일
 * */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _People_name, _People_phoneNumber, _People_email, _Professor1_professorNumber, _Professor1_lab, _Employee1_empNumber, _Employee1_office, _Student1_studentNumber, _Student1_degree, _Master1_masterNumber, _Master1_degree;
class People {
    constructor(name, phoneNumber, email) {
        _People_name.set(this, void 0);
        _People_phoneNumber.set(this, void 0);
        _People_email.set(this, void 0);
        __classPrivateFieldSet(this, _People_name, name, "f");
        __classPrivateFieldSet(this, _People_phoneNumber, phoneNumber, "f");
        __classPrivateFieldSet(this, _People_email, email, "f");
    }
    introduce() {
        console.log("이름: " + __classPrivateFieldGet(this, _People_name, "f") + ", 전화번호: " + __classPrivateFieldGet(this, _People_phoneNumber, "f") + ", 이메일: " + __classPrivateFieldGet(this, _People_email, "f"));
    }
}
_People_name = new WeakMap(), _People_phoneNumber = new WeakMap(), _People_email = new WeakMap();
class Professor1 extends People {
    constructor(professorNumber, name, phoneNumber, email, lab) {
        super(name, phoneNumber, email);
        _Professor1_professorNumber.set(this, void 0);
        _Professor1_lab.set(this, void 0);
        __classPrivateFieldSet(this, _Professor1_professorNumber, professorNumber, "f");
        __classPrivateFieldSet(this, _Professor1_lab, lab, "f");
    }
    introduce() {
        super.introduce();
        console.log("+ 교수 번호: " + __classPrivateFieldGet(this, _Professor1_professorNumber, "f") + ", 연구실: " + __classPrivateFieldGet(this, _Professor1_lab, "f"));
    }
}
_Professor1_professorNumber = new WeakMap(), _Professor1_lab = new WeakMap();
class Employee1 extends People {
    constructor(empNumber, name, phoneNumber, email, office) {
        super(name, phoneNumber, email);
        _Employee1_empNumber.set(this, void 0);
        _Employee1_office.set(this, void 0);
        __classPrivateFieldSet(this, _Employee1_empNumber, empNumber, "f");
        __classPrivateFieldSet(this, _Employee1_office, office, "f");
    }
    introduce() {
        super.introduce();
        console.log("+ 직원 번호: " + __classPrivateFieldGet(this, _Employee1_empNumber, "f") + ", 사무실: " + __classPrivateFieldGet(this, _Employee1_office, "f"));
    }
}
_Employee1_empNumber = new WeakMap(), _Employee1_office = new WeakMap();
class Student1 extends People {
    constructor(studentNumber, name, phoneNumber, email, degree) {
        super(name, phoneNumber, email);
        _Student1_studentNumber.set(this, void 0);
        _Student1_degree.set(this, void 0);
        __classPrivateFieldSet(this, _Student1_studentNumber, studentNumber, "f");
        __classPrivateFieldSet(this, _Student1_degree, degree, "f");
    }
    introduce() {
        super.introduce();
        console.log("+ 학번: " + __classPrivateFieldGet(this, _Student1_studentNumber, "f") + ", 학위: " + __classPrivateFieldGet(this, _Student1_degree, "f"));
    }
}
_Student1_studentNumber = new WeakMap(), _Student1_degree = new WeakMap();
class Master1 extends People {
    constructor(masterNumber, name, phoneNumber, email, degree) {
        super(name, phoneNumber, email);
        _Master1_masterNumber.set(this, void 0);
        _Master1_degree.set(this, void 0);
        __classPrivateFieldSet(this, _Master1_masterNumber, masterNumber, "f");
        __classPrivateFieldSet(this, _Master1_degree, degree, "f");
    }
    introduce() {
        super.introduce();
        console.log("+ 학번: " + __classPrivateFieldGet(this, _Master1_masterNumber, "f") + ", 학위: " + __classPrivateFieldGet(this, _Master1_degree, "f"));
    }
}
_Master1_masterNumber = new WeakMap(), _Master1_degree = new WeakMap();
let person = new People("문동민", 1064558761, "water8760@naver.com");
person.introduce();
let professor1 = new Professor1(123, "박현주", 12345, "@hanbat.ac.kr", "wisoft");
professor1.introduce();
let student1 = new Student1(20191836, "문동민", 12345, "water_8760@naver.com", "학부");
student1.introduce();
