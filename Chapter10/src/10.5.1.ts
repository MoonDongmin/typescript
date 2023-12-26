function embraceEverything<T extends string>(thing: T): T {
    return thing;
}

embraceEverything<string>("hi");
// error
// embraceEverything<number>(100);
// embraceEverything<boolean>(false);
// embraceEverything<{ name: string }>({name: "capt"});