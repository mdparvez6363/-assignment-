function getLengthOrSquare(input) {
    if (typeof input === 'string') {
        return input.length;
    }
    else if (typeof input === 'number') {
        return input * input;
    }
    else {
        throw new Error('Unsupported input type');
    }
}
var result1 = getLengthOrSquare('Hello');
var result2 = getLengthOrSquare(4);
console.log(result1);
console.log(result2);
