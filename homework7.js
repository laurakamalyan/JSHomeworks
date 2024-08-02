// Առաջադրանք
// var arr=[1,7,9,6,-5,85]
// Դասավորել տարրերը աճման կարգով( 2 ցիկլ)։
let arr = [1, 7, 9, 6, -5, 85];

for (let i = 0; i < arr.length; i++) { 
    for (let j = i + 1; j < arr.length; j++) { 
        if (arr[i] > arr[j]) {
            let item = arr[j]; 
            arr[j] = arr[i]; 
            arr[i] = item; 
        }
    }
}
console.log(arr);

// Առաջադրանք
// var arr=[[1,2,3],[4,5,6],[7,8,9]]
// Տպել գլխավոր անկյունագծի տարրերը 1 ցիկլով։
let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// let j = 0;
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i][j]);
//     j++;
// }

for (let i = 0; i < arr1.length; i++) {
    let j = i;
    console.log(arr1[i][j]);
}

// Առաջադրանք
// var arr=[[1,2,3],[4,5,6],[7,8,9]]
// Տպել երկրորդային անկյունագծի տարրերը 1 ցիկլով։

// let j1 = arr1.length - 1;
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i][j1]);
//     j1--;
// }

for (let i = 0; i < arr1.length; i++) {
    let j1 = arr1.length - 1 - i;
    console.log(arr1[i][j1]);
}

// Առաջադրանք
// var arr=[[1,2,3],[4,5,6],[7,8,9]]
// Գտնել զանգվածի բոլոր զույգ թվերի գումարը։
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
        if (arr1[i][j] % 2 === 0) {
            sum += arr1[i][j];
        }
    }
}
console.log(sum);

// Առաջադրանք
// var arr=[[1,2,3],[4,5,6],[7,8,9]]
// Գտնել գլխավոր և երկրորդային անկյունագծերի միջին թվաբանականը։
let sum1 = 0;
let count = 0;
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
        if (i === j || i + j === arr1.length - 1) {
            sum1 += arr1[i][j];
            count++;
        }
    }
}

// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr1[i].length; j++) {
//         if (i === j) {
//             sum1 += arr1[i][j];
//             count++;
//         }
//         if (i + j === arr1.length - 1) {
//             sum1 += arr1[i][j];
//             count++;
//         }
//     }
// }

let result = sum1 / count;
console.log(result);

// Առաջադրանք
// var arr=[[1,2,-3],[4,-7,8],[10,5,6]]
// Գտնել երկրորդային անկյունագծի բացասական թվերի արտադրյալը։
let arr2 = [
    [1, 2, -3],
    [4, -7, 8],
    [10, 5, 6]
];

let m = 1;
for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (i + j === arr2.length - 1 && arr2[i][j] < 0) {
            m *= arr2[i][j];    
        }
    }
}
console.log(m);

// Առաջադրանք
// var arr=[[1,2,3],[4,5,6],[7,8,9]]
// Գտնել և տպել գլխավոր անկյունագծի ներքևի թվերը։ // 4 7 8
let arr3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < arr3.length; i++) { 
    for (let j = 0; j < i; j++) { 
        console.log(arr3[i][j]);
    }
}

// Առաջադրանք
// var arr=[[1,2,3],[4,5,6],[7,8,9]]
// Գտնել և տպել գլխավոր անկյունագծի վերևի թվերը։ // 2 3 6
for (let i = 0; i < arr3.length; i++) { 
    for (let j = i + 1; j < arr3.length; j++) { 
        console.log(arr3[i][j]);
    }
}

// Առաջադրանք
// var arr=[[1,2,3],[4,5,6],[7,8,9]]
// Գտնել և տպել երկրորդային անկյունագծի ներքևի թվերը։ // 6 8 9
for (let i = 0; i < arr3.length; i++) {
    for (let j = arr3.length - i; j < arr3.length; j++) {
        console.log(arr3[i][j]);
    }
}

// Առաջադրանք
// var arr=[[1,2,3],[4,5,6],[7,8,9]]
// Գտնել և տպել երկրորդային անկյունագծի վերևի թվերը։ // 1 2 4
for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3.length - i - 1; j++) {
        console.log(arr3[i][j]);
    }
}