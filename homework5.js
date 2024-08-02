// Առաջադրանք
// Ստեղծել string-ային զանգված և նրա մեջ պահել անուններ։
// Եթե կա "Anahit" տպել "Զանգվածի ներսում կա Անահիտ անունը",
// հակառակ դեպքում տպել "Զանգվածի ներսում չկա Անահիտ անունը"
// գրել switch case-ով
let names = ["Anahit", "Tom", "Anahit", "Bob", "Alice"];
let name = "Anahit";
let b = false;

// for (let i = 0; i < names.length; i++) {
//     switch (names[i]) {
//         case name:
//             b = true;
//             break;
//     }
// }
// if (b) console.log(`Զանգվածի ներսում կա ${name} անունը`);
// else console.log(`Զանգվածի ներսում չկա ${name} անունը`);


for (let i = 0; i < names.length; i++) {
    if (names[i] === name) {
        b = true;
        break;
    }
}
if (b) console.log(`Զանգվածի ներսում կա ${name} անունը`);
else console.log(`Զանգվածի ներսում չկա ${name} անունը`);




// Առաջադրանք
// Գտնել զանգվածի ամենամեծ թիվը։
let arr = [0, 5, 8, 11, 23, 14, 4, 2];
let max = arr[0];
for (let i = 1; i < arr.length; i++) { // i = 1-ic vor ira het el chhamemati
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log("max = " + max);

// Առաջադրանք
// Գտնել զանգվածի ամենափոքր թիվը։
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
}
console.log("min = " + min);



// Առաջադրանք
// Գտնել զանգվածի զույգ թվերից ամենափոքրը։
let arr1 = [21, 4, 42, 13, 7, 18, 2];
let new_arr = [];
let j = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr1[i] % 2 === 0) {
        new_arr[j] = arr1[i];
        j++;
    }
}

let min2 = new_arr[0];
for (let i = 1; i < new_arr.length; i++) {
    if (new_arr[i] < min2) min2 = new_arr[i];
}
console.log("min = " + min2);



// Առաջադրանք
// Զանգվածի տարրերը դասավորել 1 տողի վրա հակառակ հերթականությամբ։
let arr2 = [1, 2, 3, 4, 5, 6];
let reversed = "";
for (i = arr2.length - 1; i >= 0; i--) {
    reversed += arr2[i] + " ";
}
console.log("Reversed array => " + reversed);



// Առաջադրանք
// var arr=[1,2,8,12,0,11,4,0,10,3,7]
// Գտնել և տպել այն թվերը,որոնց աջ ու ձախ կողմերի գումարը մեծ է 8-ից։
var arr3 = [1, 2, 8, 12, 0, 11, 4, 0, 10, 3, 7];
for (let i = 1; i < arr3.length - 1; i++) {
    if (arr3[i - 1] + arr3[i + 1] > 8) console.log(arr3[i]);
}

