// 이렇게 하지말라

const originalCharAt = String.prototype.charAt;
String.prototype.charAt = function(pos) {
    console.log(this, typeof this, pos);
    return originalCharAt.call(this, pos);
};
console.log('primitive'.charAt(3));