// interface Person {
//     name: string,
//     tel: string,
//     email: string
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var _Person_name, _Person_tel, _Person_email, _Professor_professorNumber, _Professor_lab, _Employee_employeeNumber, _Employee_office, _Student_studentNumber, _Student_status;
// 부모 클래스
var Person = /** @class */ (function () {
    function Person(name, tel, email) {
        _Person_name.set(this, void 0);
        _Person_tel.set(this, void 0);
        _Person_email.set(this, void 0);
        __classPrivateFieldSet(this, _Person_name, name, "f");
        __classPrivateFieldSet(this, _Person_tel, tel, "f");
        __classPrivateFieldSet(this, _Person_email, email, "f");
    }
    Person.prototype.getInfo = function () {
        return {
            name: __classPrivateFieldGet(this, _Person_name, "f"),
            tel: __classPrivateFieldGet(this, _Person_tel, "f"),
            email: __classPrivateFieldGet(this, _Person_email, "f"),
        };
    };
    return Person;
}());
_Person_name = new WeakMap(), _Person_tel = new WeakMap(), _Person_email = new WeakMap();
// Professor 클래스
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(professorNumber, name, phoneNumber, email, lab) {
        var _this = _super.call(this, name, phoneNumber, email) || this;
        _Professor_professorNumber.set(_this, void 0);
        _Professor_lab.set(_this, void 0);
        __classPrivateFieldSet(_this, _Professor_professorNumber, professorNumber, "f");
        __classPrivateFieldSet(_this, _Professor_lab, lab, "f");
        return _this;
    }
    Professor.prototype.getInfo = function () {
        return __assign(__assign({}, _super.prototype.getInfo.call(this)), { professorNumber: __classPrivateFieldGet(this, _Professor_professorNumber, "f"), lab: __classPrivateFieldGet(this, _Professor_lab, "f") });
    };
    return Professor;
}(Person));
_Professor_professorNumber = new WeakMap(), _Professor_lab = new WeakMap();
// Employee 클래스
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(employeeNumber, name, phoneNumber, email, office) {
        var _this = _super.call(this, name, phoneNumber, email) || this;
        _Employee_employeeNumber.set(_this, void 0);
        _Employee_office.set(_this, void 0);
        __classPrivateFieldSet(_this, _Employee_employeeNumber, employeeNumber, "f");
        __classPrivateFieldSet(_this, _Employee_office, office, "f");
        return _this;
    }
    Employee.prototype.getInfo = function () {
        return __assign(__assign({}, _super.prototype.getInfo.call(this)), { professorNumber: __classPrivateFieldGet(this, _Employee_employeeNumber, "f"), lab: __classPrivateFieldGet(this, _Employee_office, "f") });
    };
    return Employee;
}(Person));
_Employee_employeeNumber = new WeakMap(), _Employee_office = new WeakMap();
// Student 클래스
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(studentNumber, name, phoneNumber, email, status) {
        var _this = _super.call(this, name, phoneNumber, email) || this;
        _Student_studentNumber.set(_this, void 0);
        _Student_status.set(_this, void 0);
        __classPrivateFieldSet(_this, _Student_studentNumber, studentNumber, "f");
        __classPrivateFieldSet(_this, _Student_status, status, "f");
        return _this;
    }
    Student.prototype.getInfo = function () {
        return __assign(__assign({}, _super.prototype.getInfo.call(this)), { studentNumber: __classPrivateFieldGet(this, _Student_studentNumber, "f"), status: __classPrivateFieldGet(this, _Student_status, "f") });
    };
    return Student;
}(Person));
_Student_studentNumber = new WeakMap(), _Student_status = new WeakMap();
function formatInfo(person) {
    return Object.entries(person).map(function (_a) {
        var i = _a[0], v = _a[1];
        return "".concat(i, ": ").concat(v);
    }).join(", \n");
}
// 객체 생성 및 출력
var professor = new Professor(1, "라이언", "010-1234-1234", "ryan@kakao.com", "kakao");
var i = formatInfo(professor.getInfo());
console.log(i);
var employee = new Employee(2, "춘식이", "010-1234-4567", "choonsik@kakao.com", "kakaofriends");
console.log(employee.getInfo());
var student = new Student(3, "프로도", "010-1234-5678", "prodo@kakao.com", "학부생");
console.log(student.getInfo());
var student2 = new Student(4, "무지", "010-1234-5678", "muji@kakao.com", "대학원생");
console.log(student2.getInfo());
