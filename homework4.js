// Երկնիշ թվի թվանշանների գումարը
let num1 = 45; // +prompt("Մուտքագրել երկնիշ թիվ"); 
let n1 = Math.floor(num1 / 10);
let n2 = num1 % 10;
console.log(`${num1} => ${n1} + ${n2} = ${n1 + n2}`);





// Եռանիշ թվի թվանշանների գումարը
let num2 = 214; // +prompt("Մուտքագրել եռանիշ թիվ");
let x1 = Math.floor(num2 / 100); // 2

// 214 / 10 = 21.4
// 21.4 % 10 = 1.3999999999999986
// Math.floor(1.3999999999999986) = 1
// let x2 = Math.floor(num2 / 10 % 10);

let x2 = Math.floor(num2 % 100 / 10);

let x3 = num2 % 10;

// 214 = 2*100 + 1*10 + 4
// let x2 = (num2 - x1*100 - x3) / 10;

console.log(`${num2} => ${x1} + ${x2} + ${x3} = ${x1 + x2 + x3}`);





// Քառանիշ թվի թվանշանների գումարը
let num3 = 3274; // +prompt("Մուտքագրել քառանիշ թիվ");

let y1 = Math.floor(num3 / 1000);
let y2 = Math.floor(num3 / 100) % 10;
let y3 = Math.floor(num3 / 10) % 10;
let y4 = num3 % 10;

console.log(`${num3} => ${y1} + ${y2} + ${y3} + ${y4} = ${y1 + y2 + y3 + y4}`);





// Ցանկացած թվի թվանշանների գումարը
let num = 123456; // prompt();
let sum = 0;

while (num > 0) {
    let x = num % 10;
    sum += x;
    num = Math.floor(num / 10);
}

console.log("sum = " + sum);