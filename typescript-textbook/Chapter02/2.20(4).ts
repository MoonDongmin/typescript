class PrivateMember {
    private priv: string = "priv";
}

class ChildPrivateMember extends PrivateMember {
    private priv: string = "priv";
}

class PrivateField {
    #priv: string = "priv";

    sayPriv() {
        console.log(this.#priv);
    }
}

class ChildPrivateField extends PrivateField {
    #priv: string = "priv";
}
