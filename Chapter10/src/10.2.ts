function getText<T>(text: T): T {
    return text;
}

getText<string>("hi");
let myString = getText<string>("hi");
let myNumber = getText<number>(100);

//getText<string>(100);