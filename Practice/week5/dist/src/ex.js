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
var _Member_id, _Member_name, _Member_phoneNumber, _Member_email, _Professor_lab, _Employee_office, _Student_academicRecord;
const log = console.log;
class Member {
    constructor(id, name, phoneNumber, email) {
        _Member_id.set(this, void 0);
        _Member_name.set(this, void 0);
        _Member_phoneNumber.set(this, void 0);
        _Member_email.set(this, void 0);
        __classPrivateFieldSet(this, _Member_id, id, "f");
        __classPrivateFieldSet(this, _Member_name, name, "f");
        __classPrivateFieldSet(this, _Member_phoneNumber, phoneNumber, "f");
        __classPrivateFieldSet(this, _Member_email, email, "f");
    }
    get id() {
        return __classPrivateFieldGet(this, _Member_id, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _Member_name, "f");
    }
    get phoneNumber() {
        return __classPrivateFieldGet(this, _Member_phoneNumber, "f");
    }
    get email() {
        return __classPrivateFieldGet(this, _Member_email, "f");
    }
    getInfo() {
        return {
            id: __classPrivateFieldGet(this, _Member_id, "f"),
            name: __classPrivateFieldGet(this, _Member_name, "f"),
            phoneNumber: __classPrivateFieldGet(this, _Member_phoneNumber, "f"),
            email: __classPrivateFieldGet(this, _Member_email, "f"),
        };
    }
}
_Member_id = new WeakMap(), _Member_name = new WeakMap(), _Member_phoneNumber = new WeakMap(), _Member_email = new WeakMap();
class Professor extends Member {
    constructor(id, name, phoneNumber, email, lab) {
        super(id, name, phoneNumber, email);
        _Professor_lab.set(this, void 0);
        __classPrivateFieldSet(this, _Professor_lab, lab, "f");
    }
    get lab() {
        return __classPrivateFieldGet(this, _Professor_lab, "f");
    }
    getInfo() {
        return {
            ...super.getInfo(),
            lab: __classPrivateFieldGet(this, _Professor_lab, "f"),
        };
    }
}
_Professor_lab = new WeakMap();
class Employee extends Member {
    constructor(id, name, phoneNumber, email, office) {
        super(id, name, phoneNumber, email);
        _Employee_office.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_office, office, "f");
    }
    get office() {
        return __classPrivateFieldGet(this, _Employee_office, "f");
    }
    getInfo() {
        return {
            ...super.getInfo(),
            office: __classPrivateFieldGet(this, _Employee_office, "f"),
        };
    }
}
_Employee_office = new WeakMap();
class Student extends Member {
    constructor(id, name, phoneNumber, email, academicRecord) {
        super(id, name, phoneNumber, email);
        _Student_academicRecord.set(this, void 0);
        __classPrivateFieldSet(this, _Student_academicRecord, academicRecord, "f");
    }
    get academicRecord() {
        return __classPrivateFieldGet(this, _Student_academicRecord, "f");
    }
    getInfo() {
        return {
            ...super.getInfo(),
            academicRecord: __classPrivateFieldGet(this, _Student_academicRecord, "f"),
        };
    }
}
_Student_academicRecord = new WeakMap();
// function printInfo(info: PrintType): void {
//     log(
//         `ID : ${info.id} \nName : ${info.name} \nPhoneNumber : ${info.phoneNumber} \nEmail : ${info.email}`,
//         info instanceof Professor ? `\nLab : ${info.lab}\n` :
//             info instanceof Employee ? `\nOffice : ${info.office}\n` :
//                 info instanceof Student ? `\nAcademicRecord : ${info.academicRecord}\n` : "\nERROR\n",
//     );
// }


// instanceof 보다는 in을 사용하면 좀 더 괜찮은 방법
function printInfo(info) {
    log(`ID : ${info.id} \nName : ${info.name} \nPhoneNumber : ${info.phoneNumber} \nEmail : ${info.email}`, 'lab' in info ? `\nLab : ${info.lab}` :
        'office' in info ? `\nOffice : ${info.office}` :
            'academicRecord' in info ? `\nAcademicRecord : ${info.academicRecord}` : "ERROR");
}


const professor = new Professor("1", "Kim", "010-1234-1234", "Kim@wisoft.io", "N5-503");
const employee = new Employee("2", "Hong", "010-1234-4567", "Hong@wisoft.io", "N5-511");
const student = new Student("3", "Bae", "010-1234-5678", "Bae@wisoft.io", "학부생");
const student2 = new Student("4", "Ahn", "010-1324-5670", "Ahn@wisoft.io", "대학원생");


// TypeCasting 을 사용해서 타입을 강제 변환해줌
printInfo(employee.getInfo());
