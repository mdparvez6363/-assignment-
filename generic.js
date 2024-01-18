var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function reverseArray(arr) {
    return __spreadArray([], arr, true).reverse();
}
var originalArray = [1, 2, 3, 4, 5];
var reversedArray = reverseArray(originalArray);
console.log(originalArray);
console.log(reversedArray);
