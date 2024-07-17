function fetchNumber() {
    return new Promise(function (resolve, reject) {
        resolve(10);
    });
}

fetchNumber().then(function (data) {
    console.log(data);
});

function fetchError() {
    return new Promise(function (resolve, reject) {
        resolve("시스템 에러");
    });
}

fetchError().catch(function (error) {
    console.log(error);
});