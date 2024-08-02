// Ստեղծել ֆունկցիա,որը որպես արգումենտ կստանա տեքստ և regExp-ի օգնությամբ ստուգել,
// արդյոք տվյալ տեքստը սկսվում է մեծատառով թե ոչ։Եթե այո տպել true, եթե ոչ false:
let upper = str => {
    let reg = /^[A-Z]/g;
    if ( str.match(reg) ) {
        return true;
    } else {
        return false;
    }
}
console.log( upper("Hello") );

// Տրված զանգվածի համար դուրս բերեք բոլոր այն տարրերը, որոնք չեն պարունակում e.
let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner'];
let regexp = /e/g;
items.forEach( s => {
    if (!s.match(regexp)) {
        console.log(s);
    }
});

// Տրված տողի համար 5-ի առաջին դեպքը փոխարինիր 'five'-ով:
let ip = 'They ate 5 apples and 5 oranges';
let regexp1 = /5/;
let x1 = ip.replace(regexp1, "five");
console.log(x1);

// let arr = ip.split("");
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].match(regexp2)) {
//         arr[i] = "five";
//         break;
//     }
// }
// let new_str = arr.join("");
// console.log(new_str);

// Տրված մուտքային զանգվածի համար դուրս բերեք բոլոր տարրերը, որոնք սկսվում են den- ով կամ ավարտվում են ly- ով
let items2 = ['lovely', 'fgdentist', '2 lonely', 'eden', 'flyn', 'dent'];
let reg = /^den|ly$/g;
items2.forEach(s => {
    if (s.match(reg)) {
        console.log(s);
    }
});

// Գրել regExp,որը կվերադարձնի միայն թվերը։
let str =" Grigor ` (077)00-01-02, Mariam `(098)02-01-00,Armen`(077)01-02-00";
// let reg2 = /\d/g; // թվանշանները առանձին-առանձին
let reg2 = /\d+/g;
console.log( str.match(reg2) );

// Գրել regExp,որը բոլոր “,“-ները կփոխարինի “․“-ով։
let str2="www,site,com   www,bigsite,org  www,supersite,net";
let reg3 = /,/g;
let x = str2.replaceAll(reg3, ".");
console.log(x);

// let arr = str2.split("");
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].match(reg3)) {
//         arr[i] = ".";
//     }
// }
// let new_str = arr.join("");
// console.log(new_str);