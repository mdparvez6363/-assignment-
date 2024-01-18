function isString(variable) {
    return typeof variable === 'string';
}
function processString(input) {
    if (isString(input)) {
        return input.toUpperCase();
    }
    else {
        console.log('Input is not a string');
    }
}
var strResult = processString('laptop');
var nonStrResult = processString(2024);
console.log(strResult);
