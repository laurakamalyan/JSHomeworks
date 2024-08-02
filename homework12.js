// Առաջադրանք
// Ստեղծել ծրագիր,որը կստուգի զանվածը հատուկ է, թե ոչ։ 
// Զանգվածը հատուկ է, եթե յուրաքանչյուր զույգ ինդեքս պարունակում է զույգ թիվ,
// իսկ յուրաքանչյուր կենտ ինդեքս պարունակում է կենտ թիվ:
const arr = [0, 2, 4, 5];
let b = false;
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0 && arr[i] % 2 === 0) {
//         b = true;
//     } else if (i % 2 !== 0 && arr[i] % 2 !== 0) {
//         b = true;
//     } else {
//         b = false;
//         break;
//     }
// }
// console.log(b);

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === arr[i] % 2) b = true;
//     else {
//         b = false;
//         break;
//     }
// }

let x = arr.every( (v, i) => v % 2 === i % 2 );

if (x) console.log("hatuk e");
else console.log("hatuk che");

// Առաջադրանք
// Օգտվելով map մեթոդից զանգվածի բոլոր անդամները դարձնել string-ային։
// Օգտագործել հետևյալ զանգվածը 
const arr1 = [2, 5, 100];
// let str = arr1.map( value => {
//     return "" + value; 
// });

let str = arr1.map( value => value.toString() );

// Առաջադրանք
// Օգտվելով map մեթոդից տպել զանգվածի անդամների քառակուսիները։
// Օգտագործել հետևյալ զանգվածը 
const arr2 = [1, 2, 8, 9];
let square = arr2.map( value => Math.pow(value, 2) );
console.log(square);

// Առաջադրանք
// Օգտվելով filter մեթոդից տպել զանգվածի այն string-ային անդամները, որոնց 
// երկարությունը փոքր է կամ հավասար 5։
let string_array = ["Ani", "Mariam", "Aram", "Elena", "Bob", "Tom", "Hasmik"];
// let new_arr = string_array.filter( value => {
//     if (value.length <= 5) {
//         return value;
//     }
// });

let new_arr = string_array.filter( value => value.length <= 5 );
console.log(new_arr);

// Առաջադրանք
// Օգտվելով filter մեթոդից տպել զանգվածի այն անդամները,որոնք մեծ են  4-ից։
const arr3 = [5, 8, 1, 2, 4, 3, 7];
let new_arr2 = arr3.filter( value => value > 4 );
console.log(new_arr2);

// Առաջադրանք
// Գրել ծրագիր,որը կվերադարձնի ամենաերկար երկրի անունը։
// Օգտագործել հետևյալ զանգվածը 
const arr4 = ["Australia", "Germany", "United States of America"];
// let long = arr4[0];
// for (let i = 0; i < arr4.length; i++) {
//     if (arr4[i].length > long.length) {
//         long = arr4[i];
//     }
// }
// console.log(long);

function long_country(arr) {
    let long = arr[0];
    arr.forEach( v => {
        if (v.length > long.length) {
            long = v;
        }
    });
    return long;
}
console.log(long_country(arr4));

// find-ն օգտագործելով վերցնենք վերջին զույգ թիվը
let arr5 = [4, 7, 8, 24, 57, 9, 18, 5];

let last = arr5.findLast(value => value % 2 === 0)
console.log(last);