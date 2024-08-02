// Առաջադրանք
// Օգտագործել հետևյալ զանգվածը՝ 
let people = ["Greg", "Mary", "Devon", "James"];

// Տպել զանգվածի անդամները օգտագործելով ցիկլ
for (let i = 0; i < people.length; i++) console.log(people[i]);

// Հեռացնել "Greg" անդամը զանգվածից
people.shift();
console.log(people);

// Հեռացնել "James" անդամը զանգվածից
people.pop();
console.log(people);

// Ավելացնել "Matt" անդամը զանգվածի սկզբից
people.unshift("Matt");
console.log(people);

// Ավելացրեք Ձեր անունը զանգվածի վերջից։
people.push("Laura");
console.log(people);

// Ստուգել արդյոք "Mary" անունը կա զանգվածում
console.log(people.includes("Mary"));

// Պատճենել զանգվածը այնպես,որ այն չներառի "Mary"-ին կամ "Matt"-ը։
let copy_array = people.slice(1, 4);
console.log(copy_array);

// Գտնել "Mary" անդամի դիրքը։
console.log(people.indexOf("Mary"));

// Գտնել "Foo" անդամի դիրքը։
console.log(people.indexOf("Foo"));

// Ջնջել "Devon" անդամին զանգվածից և նրա փոխարեն ավելացնել "Elizabeth" և "Artie"
let delete_name = people.splice(2, 1, "Elizabeth", "Artie");
console.log(delete_name);
console.log(people);

// Ստեղծել նոր զանգված,որն իր մեջ կպահի "Bob" արժեքը,ապա 2 զանգվածները միացնել իրար։
let name = ["Bob"];
let new_people = people.concat(name);
console.log(new_people);


// Առաջադրանք
// Գրել ծրագիր, որը կհաշվի ու զանգվածի մեջ կլցնի`
// 40 - 600 միջակայքի 11-ին բաժանվող թվերը։
let arr = [];
for (let i = 40; i <= 600; i++) {
    if (i % 11 === 0) {
        arr.push(i);
    }
}
console.log(arr);

// 100 - 900 միջակայքի այն զույգ թվերը, որոնք բաժանվում են 13-ի:
let arr1 = [];
for (let i = 100; i <= 900; i++) {
    if (i % 2 === 0 && i % 13 === 0) {
        arr1.push(i);
    }
}
console.log(arr1);

for (let i = 0, j = 0; i < 2, j < 3; i++, j++) {

}

// Առաջադրանք
// var arr=[1,7,9,6,-5,1]
// Ստուգել զանգվածի սիմետրիկությունը։
// Սիմետրիկ զանգվածի օրինակա [1,2,3,4,3,2,1]
var arr3 = [2, 1, 3, 4, 3, 2, 1];//[1, 7, 9, 6, -5, 1];
let b = false;

// let left = arr3.slice(0, arr3.length / 2);
// let right = arr3.slice(arr3.length / 2, arr3.length);
// right.reverse();
// for (let i = 0; i < left.length; i++) {
//     if (left[i] === right[i]) {
//         b = true;
//     }
//     else {
//         b = false;
//         break;
//     }
// }

// if (b) console.log("Simetrik e");
// else console.log("Simetrik che");

let j = arr3.length - 1;
for (let i = 0; i < arr3.length / 2; i++) {
    if (arr3[i] === arr3[j]) {
        b = true;
    }
    else {
        b = false;
        break;
    }
    j--;
}
console.log(b);

// Առաջադրանք
// var arr=[7,41,13,3,33,6,21,-4,-666];
// Գտնել և տպել զանգվածի ամենամեծ և ամենափոքր անդամների միջև եղած թվերը։
var arr4 = [7, 41, 13, 3, 33, 6, 21, -4, -666];
let min = arr4[0];
let max = arr4[0];
for (let i = 1; i < arr4.length; i++) {
    if (arr4[i] > max) max = arr4[i];
    if (arr4[i] < min) min = arr4[i]; // այստեղ պետք է իրարից անկախ ստուգենք
}

let max_index = arr4.indexOf(max);
let min_index = arr4.indexOf(min);
let items = [];
if (min_index < max_index) {
    items = arr4.slice(min_index, max_index + 1);
} else {
    items = arr4.slice(max_index, min_index + 1);
}
console.log(items);

// if max_index > min_index
for (let i = min_index; i <= max_index; i++) {
    console.log(i);
}
// if min_index > max_index
for (let i = max_index; i <= min_index; i++) {
    console.log(i);
}

// Առաջադրանք
// var arr=[1,5,true,0,’hello’,false,-5,’world’,88]
// Ըստ իրենց տիպերի առանձին զանգվածներով տպել զանգվածի տարրերը։
var arr5 = [1, 5, true, 0, "hello", false, -5, "world", 88];
console.log(typeof arr5[2]);
let number_arr = [], boolean_arr = [], string_arr = [];

for (let i = 0; i < arr5.length; i++) {
    switch (typeof arr5[i]) {
        case "number":
            number_arr.push(arr5[i]);
            break;
        case "boolean":
            boolean_arr.push(arr5[i]);
            break;
        case "string":
            string_arr.push(arr5[i]);
            break;
    }
}
console.log(number_arr);
console.log(boolean_arr);
console.log(string_arr);