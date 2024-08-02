// Առաջադրանք
// Ստեղծել ֆունկցիա,որը կստանա մեկ արգումենտ և կվերադարձնի 
// new Promise(resolve, reject) արգումենտներով։Նրա մեջ ստեղծել 
// setTimeout  ֆունկցիա,որտեղ կստուգենք՝ արդյոք ֆունկցիային 
// փոխանցված արգումենտը կենտ է,եթե այո,ապա  resolve-ի մեջ տպել 
// "even number",հակառակ դեպքում՝ ստեղծել error՝ "odd number" 
// հաղորդագրությամբ։Կանչել ֆունկցիան և փոխանցել արգումենտ և 
// համապատասխան արգումենտին console պատուհանում տպել հաղորդագրությունը։
let func1 = val => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (val % 2 !== 0) {
                resolve("even number");
            } else {
                reject(new Error("odd number"));
            }
        });
    });
}

let promise1 = func1(58);

promise1.then( response => {
    console.log(response);
}).catch( error => {
    console.error(error.message);
});
 
// Առաջադրանք
// Ստեղծել ֆունկցիա,որը կստանա մեկ արգումենտ և կվերադարձնի 
// new Promise(resolve) արգումենտով։Նրա մեջ ստեղծել setTimeout  
// ֆունկցիա,որտեղ արգումենտում ստացված արժեքը պետք է մեծացնել 2 անգամ։
let func2 = val => {
    return new Promise( resolve => {
        setTimeout( () => {
            resolve(val * 2);
        });
    });
}

let promise2 = func2(2);

promise2.then(response => {
    console.log(response);
});
