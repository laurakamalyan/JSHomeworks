// Առաջադրանք
// Գրել ֆունկցիա,որը տրված րոպեն կձևափոխի վայրկյանի։
function convert(minute) {
    return minute * 60;
}
console.log(convert(2));

// Առաջադրանք
// Գրել ֆունկցիա որը վերցնում է եռանկյան հիմքն ու բարձրությունը և 
// վերադարձնում նրա մակերեսը:
// Մակերես=(հիմք * բարձրություն) / 2
function area(c, h) {
    return (c * h) / 2;
}
console.log(area(2, 3));

// Առաջադրանք
// Օգտագործելով ֆունկցիա գտնել երկչափ զանգվածի 3-ի բաժանվող թվերի գումարը։
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] % 3 === 0) {
                sum += array[i][j];
            }
        }
    }

    return sum;
}

let arr = [
    [1, 2],
    [3, 4, 8],
    [5, 7],
    [2, 7, 9, 3]
];

console.log(sum(arr));

// Առաջադրանք
// Օգտագործելով ֆունկցիա գտնել երկչափ զանգվածի գլխավոր անկյունագծի և իրենից 
// վերև գտնվող թվերի գումարը։
function summer(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) { 
        for (let j = i; j < array[i].length; j++) { 
            sum += array[i][j];
        }
    }
    return sum;
}

let arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(summer(arr2));

// Առաջադրանք
// Օգտագործելով ֆունկցիա հաշվել ցանկացած թվի ֆակտորիալ։
function factorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorial(6)); 

// Առաջադրանք
// Math.abs-ի գործողությունն արտահայտել ֆունկցիայի տեսքով։
function absolute(number) {
    if (number < 0) return number * (-1); // կամ էլ կարող եմ գրել return -number;
    return number;
}
console.log(absolute(-8));

// Առաջադրանք
// Math.pow-ի գործողությունն արտահայտել ֆունկցիայի տեսքով։
function power(number, degree) {
    let result = 1;
    for (let i = 0; i < degree; i++) {
        result *= number;
    }
    return result;
}
console.log(power(3, 3));

// Առաջադրանք
// Math.ceil-ի գործողությունն արտահայտել ֆունկցիայի տեսքով։
function ceil(n) {
    // Եթե ամբողջ թիվ է, վերադարձնի հենց այդ թիվը
    if (n % 1 === 0) {
        return n;
    } else { // եթե չէ ստուգում ենք 2 դեպք
        // եթե դրական թիվ է 2.56 - 0.56 + 1 = 3
        if (n > 0) return n - n % 1 + 1;
        // եթե բացասական թիվ է - 2.56 - (-0.56) = 2 
        else return n - n % 1;
    }
}
console.log(ceil(5)); // 5
console.log(ceil(2.56)); // 3
console.log(ceil(-45.56)); // -2
console.log(-45.56 % 1);

// Առաջադրանք
// Math.floor-ի գործողությունն արտահայտել ֆունկցիայի տեսքով։
function floor(n) {
    if (n % 1 === 0) {
        return n;
    }
    else {
        if (n > 0) return n - n % 1;
        else return n - n % 1 - 1;
    }
}

console.log(floor(2));
console.log(floor(-2));
console.log(floor(2.56));
console.log(floor(-2.56));

// Առաջադրանք
// Ստեղծեք ֆունկցիա, որը կվերցնի զանգվածն ու այդ զանգվածի տարրերը 
// վերածելով թվերի,
// ցիկլի տակ կցուցադրի միայն թվերը: Օգտագործեք document.write() մեթոդը:
// Օգտագործել հետևյալ զանգվածը ՝
let str = ["2 աչք", "2 ականջ", "1 քիթ", "1 բերան", "1 նյարդային համակարգ", "6 զգայարան"];
function show(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(parseInt(array[i]));
    }
}
show(str);

// Առաջադրանք
// var arr=[1,7,9,6,-5,1]
// Ստուգել զանգվածի սիմետրիկությունը։
// Սիմետրիկ զանգվածի օրինակա [1,2,3,4,3,2,1]
function simetric(array) {
    let b = false;
    for (let i = 0; i < array.length / 2; i++) {
        if (array[i] === array[array.length - 1 - i]) {
            b = true;
        }
        else {
            b = false;
            break;
        }
    }
    
    return b;
}
var arr3 = [1, 7, 9, 6, -5, 1];
let result = simetric(arr3);
if (result === true) {
    console.log("Simetrik e");
}
else {
    console.log("Simetrik che");
}