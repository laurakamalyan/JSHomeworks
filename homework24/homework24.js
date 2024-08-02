// Առաջադրանք
// Ստեղծել փոփոխական և նրան վերագրել prompt պատուհան,որն իր մեջ կպարունակի "Type hello" 
// արտահայտությունը։try-ում տուգել,եթե օգտվողը չի մուտքագրել "hello" բառը,ապա ստեղծել 
// error,որը կտպի "Oops, you didn't type hello" հաղորդագրությունը։Catch-ում ստանալ այն 
// և alert պատուհանով տպել հաղորդագրությունը։Finally-ում տպել 'thanks for playing!'  
// արտահայտությունը alert  պատուհանով։
// let x = prompt("Type hello");
// try {
//     if (x != "hello") {
//         throw new Error("Oops, you didn't type hello");
//     }
// } catch(error) {
//     alert(error);
// } finally {
//     alert("Thanks for playing!");
// }

// Առաջադրանք
// Ստեղծել հետևյալ զանգվածը՝ let arr = [1, 4, true, 8,"hello"]։ try-ում տուգել,եթե զանգվածի 
// անդամը boolean է ստեղծել error՝"Oops,this itam is boolean" հաղորդագրությամբ, եթե string է 
// ստեղծել error՝"Oops,this itam is string" հաղորդագրությամբ։ Error-ները պահել զանգվածում։
// Օգտագործելով  catch-ը տպել error-ները։
let arr = [1, 4, true, 8,"hello"];
let err = [];

// try {
//     arr.forEach((value, index, array) => {
//         if (typeof value === "boolean") {
//             err.push("Oops,this itam is boolean");
//         }
//         if (typeof value === "string") {
//             err.push("Oops,this itam is string");
//         }
//     });
    
//     throw err;
    
// } catch(errors) {
//     errors.forEach(error => {
//         console.error(error);
//     });
// } 

try {
    arr.forEach((value, index, array) => {
        if (typeof value === "boolean") {
            err.push("Oops,this itam is boolean");
        }
        if (typeof value === "string") {
            err.push("Oops,this itam is string");
        }
    });
    
    throw new TypeError(err);
    
} catch(errors) {  
    console.log(errors);
} 

// Առաջադրանք
// Ստեղծել փոփոխական և նրան վերագրել prompt պատուհան,որն իր մեջ կպարունակի "Մուտքագրեք Ձեր տարիքը" 
// արտահայտությունը:Եթե տարիքը փոքր է 18-ից ստեղծել error՝"Թույլատրելի մուտքը 18-ից բարձր" 
// հաղորդագրությամբ,հակառակ դեպքում տպել "Ձեր մուտքը հաստատվել է" հաղորդագրությունը։ 
// Օգտագործելով  catch-ը տպել error-ը։
// let age = +prompt("Մուտքագրեք Ձեր տարիքը");
// try {
//     if (age < 18) {
//         throw new Error("Թույլատրելի մուտքը 18-ից բարձր");
//     } else {
//         console.log("Ձեր մուտքը հաստատվել է");
//     }
// } catch(error) {
//     console.error(error);
// }

