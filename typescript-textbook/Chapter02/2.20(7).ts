class Signature {
    [propName: string]: string | number | undefined;

    static [propName: string]: boolean;
}

const sig = new Signature();
sig.hello = "world";
Signature.isGood = true;
