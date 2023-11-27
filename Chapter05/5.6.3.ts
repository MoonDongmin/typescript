// interface SalaryInfo {
//     junior: string;
//     mid: string;
//     senior: string;
// }

interface SalaryInfo {
    [level: string]: string;
}

let salary: SalaryInfo = {
    junior: "100원",
    mid: "400원",
    senior: "700원",
};

let money = salary["junior"];