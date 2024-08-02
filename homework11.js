// Գրել ceil, floor և abs մեթոդները ռեկուրսիայով
function abs(number) {
    if (number > 0) {
        return number;
    }
    return abs(-number);
}
console.log( abs(-8) );

// ceil
function ceil(number) {
    if (number % 1 === 0) {
        return number;
    }
    if (number > 0) {
        return ceil(number - number % 1 + 1);
    } else {
        return ceil(number - number % 1);
    }
}
console.log( ceil(-2.5) );
console.log( ceil(2.5) );

// floor
function floor(number) {
    if (number % 1 === 0) {
        return number;
    }
    if (number > 0) {
        return floor(number - number % 1);
    } else {
        return floor(number - number % 1 - 1);
    }
}
console.log( floor(-2.5) );
console.log( floor(2.5) );