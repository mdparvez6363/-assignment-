function concatenateOrSum(arr) {
    if (arr.every(function (item) { return typeof item === 'string'; })) {
        return arr.join('');
    }
    else if (arr.every(function (item) { return typeof item === 'number'; })) {
        var sum = 0;
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var number = arr_1[_i];
            sum += Number(number);
        }
        return sum;
    }
    else {
        throw new Error('Unsupported array type');
    }
}
var result11 = concatenateOrSum(['Hello', ' ', 'World']);
var result22 = concatenateOrSum([1, 2, 3, 4]);
console.log(result11);
console.log(result22);
