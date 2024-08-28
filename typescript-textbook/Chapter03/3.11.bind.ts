function a(this: Window | Document) {
    return this;
}
const b = a.bind(document);
const c = b();
