{
    function getA(a: number) {
        let c = "hi";
        return a + c;
    }

// function getA(a = 10) {
//     return a;
// }

    // @ts-ignore
    let result = getA();
    console.log(result);
}