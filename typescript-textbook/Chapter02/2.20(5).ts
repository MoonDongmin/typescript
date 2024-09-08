class Human {
    eat() {
        console.log("냠냠");
    }

    sleep() {
        console.log("쿨쿨");
    }
}

class Employee extends Human {
    work() {
        console.log("끙차");
    }

    override sleep() {
        console.log("에고고");
    }
}
