(async () => {
    const str = await Promise.reslove("promise");
    const all = await Promise.all([
        "string",
        Promise.resolve(123),
        Promise.resolve(Promise.resolve(true)),
    ]);

    const chaining = await Promise.resolve("hi")
        .then(() => {
            return 123;
        })
        .then(() => {
            return true;
        })
        .catch((err) => {
            console.error(err);
        });
})();

Awaited
