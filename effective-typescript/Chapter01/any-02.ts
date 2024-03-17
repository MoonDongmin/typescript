let age: number;
// @ts-ignore
age = "12";

age = "12" as any;

// @ts-ignore
function calculateAge(birthDate: Date): number {
    // ...
}

let birthDate: any = "1990-01-19";
calculateAge(birthDate);
