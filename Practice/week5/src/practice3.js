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
var _People_name, _People_phoneNumber, _People_email, _Professor_professorNumber, _Professor_lab, _Employee_empNumber, _Employee_office, _Student_studentNumber, _Student_degree, _Master_masterNumber, _Master_degree;
/**
 * 우리는 한밭대학교에 있습니다. 교수 학생 직원이 있습니다.
 *  - 교수는 교수번호, 이름, 전화번호, 이메일, 연구실
 *  - 직원은 직원번호, 이름, 전화번호, 이메일, 사무실
 *  - 학생 학번, 이름, 전화번호, 이메일, 학적
 *  - 학부 / 학생
 *  - 이것을 클래스로 각각 대상별로 객체를 생상해 객체의 정보를 출력해라.
 *  공통속성: 이름, 전화번호, 이메일
 * */
var People = /** @class */ (function () {
    function People(name, phoneNumber, email) {
        _People_name.set(this, void 0);
        _People_phoneNumber.set(this, void 0);
        _People_email.set(this, void 0);
        __classPrivateFieldSet(this, _People_name, name, "f");
        __classPrivateFieldSet(this, _People_phoneNumber, phoneNumber, "f");
        __classPrivateFieldSet(this, _People_email, email, "f");
    }
    People.prototype.introduce = function () {
        console.log("이름: " + __classPrivateFieldGet(this, _People_name, "f") + ", 전화번호: " + __classPrivateFieldGet(this, _People_phoneNumber, "f") + ", 이메일: " + __classPrivateFieldGet(this, _People_email, "f"));
    };
    return People;
}());
_People_name = new WeakMap(), _People_phoneNumber = new WeakMap(), _People_email = new WeakMap();
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
    Professor.prototype.introduce = function () {
        _super.prototype.introduce.call(this);
        console.log("+ 교수 번호: " + __classPrivateFieldGet(this, _Professor_professorNumber, "f") + ", 연구실: " + __classPrivateFieldGet(this, _Professor_lab, "f"));
    };
    return Professor;
}(People));
_Professor_professorNumber = new WeakMap(), _Professor_lab = new WeakMap();
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(empNumber, name, phoneNumber, email, office) {
        var _this = _super.call(this, name, phoneNumber, email) || this;
        _Employee_empNumber.set(_this, void 0);
        _Employee_office.set(_this, void 0);
        __classPrivateFieldSet(_this, _Employee_empNumber, empNumber, "f");
        __classPrivateFieldSet(_this, _Employee_office, office, "f");
        return _this;
    }
    Employee.prototype.introduce = function () {
        _super.prototype.introduce.call(this);
        console.log("+ 직원 번호: " + __classPrivateFieldGet(this, _Employee_empNumber, "f") + ", 사무실: " + __classPrivateFieldGet(this, _Employee_office, "f"));
    };
    return Employee;
}(People));
_Employee_empNumber = new WeakMap(), _Employee_office = new WeakMap();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(studentNumber, name, phoneNumber, email, degree) {
        var _this = _super.call(this, name, phoneNumber, email) || this;
        _Student_studentNumber.set(_this, void 0);
        _Student_degree.set(_this, void 0);
        __classPrivateFieldSet(_this, _Student_studentNumber, studentNumber, "f");
        __classPrivateFieldSet(_this, _Student_degree, degree, "f");
        return _this;
    }
    Student.prototype.introduce = function () {
        _super.prototype.introduce.call(this);
        console.log("+ 학번: " + __classPrivateFieldGet(this, _Student_studentNumber, "f") + ", 학위: " + __classPrivateFieldGet(this, _Student_degree, "f"));
    };
    return Student;
}(People));
_Student_studentNumber = new WeakMap(), _Student_degree = new WeakMap();
var Master = /** @class */ (function (_super) {
    __extends(Master, _super);
    function Master(masterNumber, name, phoneNumber, email, degree) {
        var _this = _super.call(this, name, phoneNumber, email) || this;
        _Master_masterNumber.set(_this, void 0);
        _Master_degree.set(_this, void 0);
        __classPrivateFieldSet(_this, _Master_masterNumber, masterNumber, "f");
        __classPrivateFieldSet(_this, _Master_degree, degree, "f");
        return _this;
    }
    Master.prototype.introduce = function () {
        _super.prototype.introduce.call(this);
        console.log("+ 학번: " + __classPrivateFieldGet(this, _Master_masterNumber, "f") + ", 학위: " + __classPrivateFieldGet(this, _Master_degree, "f"));
    };
    return Master;
}(People));
_Master_masterNumber = new WeakMap(), _Master_degree = new WeakMap();
var person = new People("문동민", 1064558761, "water8760@naver.com");
person.introduce();
var professor = new Professor(123, "박현주", 12345, "@hanbat.ac.kr", "wisoft");
professor.introduce();
var student = new Student(20191836, "문동민", 12345, "water_8760@naver.com", "학부");
student.introduce();
