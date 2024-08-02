// // Առաջադրանք
// // Ստեղծել a և b փոփոխականներ և նրանց վերագրել արժեքներ։ Օգտագործելով for ցիկլ տպել այդ միջակայքի 
// // բոլոր զույգ թվերի գումարը և միջին թվաբանականը(բոլոր թվերի գումարը բաժանած նրանց քանակի վրա։):
// let a = 2;
// let b = 14;
// let sum = 0;
// let count = 0;

// for (let i = a; i <= b; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//         count++;
//     }
// }

// console.log("Sum: " + sum);
// console.log("Arithmetic average: " + sum / count);






// // Առաջադրանք
// // Ստեղծել ծրագիր, որը կհաշվի ցանկացած թվի ֆակտորիալը։
// let number = 5;
// let factorial = 1;

// // for (let i = 1; i <= number; i++) {
// //     factorial *= i;
// // }

// // for (let i = number; i >= 1; i--) {
// //     factorial *= i;
// // }

// // let i = 1;
// // while (i <= number) {
// //     factorial *= i;
// //     i++;
// // }
// // console.log("Factorial = " + factorial);

// let i = 1;
// do {
//     factorial *= i;
//     i++;
// } while (i <= number) {
//     console.log("Factorial = " + factorial);
// }






// // Առաջադրանք
// // Գտնել 0 - ից 100 միջակայքի բոլոր 3 - ի բաժանվող թվերը և էկրանին տպել 5 - ական։
// let count2 = 0;

// // for (let i = 1; i <= 100; i++) {
// //     if (i % 3 === 0) {
// //         count2++;
// //         console.log(i);

// //         if (count2 === 5) {
// //             console.log("\n");
// //             count2 = 0;
// //         }
// //     }
// // }

// let s = "";
// for (let i = 1; i < 101; i++) {
//     if (i % 3 === 0) {
//         count2++;
//         s += `${i} `;

//         if (count2 === 5) {
//             console.log(s);
//             count2 = 0;
//             s = "";
//         }
//     }
// }

// // for (let i = 1; i < 101; i++) {
// //     if (i % 3 === 0) {
// //         count2++;
// //         s += `${i} `;

// //         if (count2 % 5 === 0) {
// //             console.log(s);
// //             s = "";
// //         }
// //     }
// // }


// // Առաջադրանք
// // Գտնել 0 - ից 10 միջակայքի բոլոր կենտ թվերի արտադրյալը։
// let m = 1;
// let i = 0;
// while (i <= 10) {
//     if (i % 2 === 1) {
//         m *= i;
//     }
//     i++;
// }

// console.log(m);






// Առաջադրանք
// Գրել ծրագիր, որը կստուգի 0 - ից 15 միջակայքի յուրաքանչյուր թիվը և console պատուհանում կտպի տվյալ 
// թիվը կենտ է թե զույգ։
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} - zuyg`);
    }
    else {
        console.log(`${i} - kent`);
    }
}