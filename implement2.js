function isString(value) {
    return typeof value === 'string';
}
function handleStringOrNumber(input) {
    if (isString(input)) {
        console.log("Input is a string: ".concat(input.toUpperCase()));
    }
    else if (typeof input === 'number') {
        console.log("Input is a number: ".concat(input * 2));
    }
    else {
        console.error('Unsupported input type');
    }
}
handleStringOrNumber("hello");
handleStringOrNumber(5);
handleStringOrNumber(2);
