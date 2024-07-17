function sayMyName(firstName: string, lastName: string): string {
    return "my name: " + firstName + " " + lastName;
}

sayMyName("Moon", "Dongmin"); // Moon Dongmin

// @ts-ignore
sayMyName("Moon"); // Moon Dongmin