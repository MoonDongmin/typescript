"use strict";
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
var _People_name, _People_phoneNumber, _People_email;
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
    constructor(name, phoneNumber, email) {
        _People_name.set(this, void 0);
        _People_phoneNumber.set(this, void 0);
        _People_email.set(this, void 0);
        __classPrivateFieldSet(this, _People_name, name, "f");
        __classPrivateFieldSet(this, _People_phoneNumber, phoneNumber, "f");
        __classPrivateFieldSet(this, _People_email, email, "f");
    }
    person() {
        console.log(__classPrivateFieldGet(this, _People_name, "f") + __classPrivateFieldGet(this, _People_phoneNumber, "f") + __classPrivateFieldGet(this, _People_email, "f"));
    }
}
_People_name = new WeakMap(), _People_phoneNumber = new WeakMap(), _People_email = new WeakMap();
// class Professor extends University {
//     #professorNumber: number;
//     public name: string;
//     protected phoneNumber: number;
//     public email: string;
//     public lab: string;
//
//     constructor(universityName: string, professorNumber: number, name: string, phoneNumber: number, email: string, lab: string) {
//         super(universityName);
//         this.#professorNumber = professorNumber;
//         this.name = name;
//         this.phoneNumber = phoneNumber;
//         this.email = email;
//         this.lab = lab;
//         console.log("교수님 이름: " + this.name + ", 전화번호: " + this.phoneNumber
//             + ", 이메일: " + this.email + ", 연구실: " + this.lab);
//     }
// }
//
// class Employee extends University {
//     #empNumber: number;
//     public name: string;
//     protected phoneNumber: number;
//     public email: string;
//     public office: string;
//
//     constructor(universityName: string, professorNumber: number, name: string, phoneNumber: number, email: string, office: string) {
//         super(universityName);
//         this.#empNumber = professorNumber;
//         this.name = name;
//         this.phoneNumber = phoneNumber;
//         this.email = email;
//         this.office = office;
//         console.log("직원 이름: " + this.name + ", 전화번호: " + this.phoneNumber
//             + ", 이메일: " + this.email + ", 사무실: " + this.office);
//     }
// }
//
// class Student extends University {
//     #studentNumber: number;
//     public name: string;
//     protected phoneNumber: number;
//     public email: string;
//     public degree: string;
//
//     constructor(universityName: string, studentNumber: number, name: string, phoneNumber: number, email: string, degree: string) {
//         super(universityName);
//         this.#studentNumber = studentNumber;
//         this.name = name;
//         this.phoneNumber = phoneNumber;
//         this.email = email;
//         this.degree = degree;
//         console.log("학생 이름: " + this.name + ", 전화번호: " + this.phoneNumber
//             + ", 이메일: " + this.email + ", 학위: " + this.degree);
//     }
// }
//
// class Master extends University {
//     #masterNumber: number;
//     public name: string;
//     protected phoneNumber: number;
//     public email: string;
//     public degree: string;
//
//     constructor(universityName: string, masterNumber: number, name: string, phoneNumber: number, email: string, degree: string) {
//         super(universityName);
//         this.#masterNumber = masterNumber;
//         this.name = name;
//         this.phoneNumber = phoneNumber;
//         this.email = email;
//         this.degree = degree;
//         console.log("학생 이름: " + this.name + ", 전화번호: " + this.phoneNumber
//             + ", 이메일: " + this.email + ", 학위: " + this.degree);
//     }
// }
let person = new People("문동민", 1234567, "water8760@naver.com");
person.person();
