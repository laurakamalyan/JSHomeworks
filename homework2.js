// Առաջադրանք
// Ստեղծել prompt պատուհան,որը օգտվողից կհարցնի տարիք,եթե տարիքը փոքր է 18-ից ,
// ապա alert պատուհանով տպել հետևյալ տեքստը ՝ “Այս կայքում Ձեր մուտքը թույլատրված 
// չէ“,հակառակ դեպքում տպել՝ “Ձեր մուտքը հաջողությամբ հաստատվել է“։
let age = +prompt("Մուտքագրեք Ձեր տարիքը");
if (age < 18) {
    alert("Այս կայքում Ձեր մուտքը թույլատրված չէ");
} else {
    alert("Ձեր մուտքը հաջողությամբ հաստատվել է");
}

/////
age <=17 && alert("Այս կայքում Ձեր մուտքը թույլատրված չէ");
age > 17 && alert("Ձեր մուտքը հաջողությամբ հաստատվել է");

// Առաջադրանք
// Օգտագործելով switch case պայմանական օպերատորը ստուգել, եթե prompt պատուհանում ներմուծված  թիվը `
// 0,1 կամ 11 է տպել “Ձմեռ“,
// 2,3 կամ 4 է տպել “Գարուն“
// 5,6 կամ 7 է տպել “Ամառ“
// 8,9 կամ 10 է տպել “Աշուն“
let number = +prompt("Մուտքագրեք թիվ");
switch (number) {
    case 0:
    case 1:
    case 11:
        console.log("Ձմեռ");
        break;
    case 2:
    case 3:
    case 4:
        console.log("Գարուն");
        break; 
    case 5:
    case 6:
    case 7:
        console.log("Ամառ");
        break;  
    case 8:
    case 9:
    case 10:
        console.log("Աշուն");
        break; 
}

// Առաջադրանք
// Ստեղծել փոփոխական,որին պետք է վերագրել լուսացույցի գույներից որևէ մեկը։
// Ստուգել, եթե գույնը կարմիր է էկրանին տպել “Հարկավոր է կանգնել“, եթե գույնը 
// կանաչ է տպել “Հարկավոր է գնալ“,եթե նարնջագույն է տպել “Հարկավոր է սպասել“ ,
// հակառակ դեպքում տպել “Լուսացույցը անսարք է“։
let color = "կանաչ";
switch (color) {
    case "կարմիր":
        console.log("Հարկավոր է կանգնել");
        break;
    case "կանաչ":
        console.log("Հարկավոր է գնալ");
        break;
    case "նարնջագույն":
        console.log("Հարկավոր է սպասել");
        break;
    default:
        console.log("Լուսացույցը անսարք է");
        break;
}

// Առաջադրանք
// Օգտագործելով +prompt պատուհանը օգտվողից հարցնել  տարիք։ Եթե մուտքագրված տարիքը 0-ից 17  
// միջակայքի է alert պատուհանով տպել՝ “Պետք է սովորես“, եթե 17-ից 56-ի միջակայքում է տպել 
// “Պետք է աշխատես“, հակառակ դեպքում տպել “Թոշակառու“։
let age2 = +prompt("Մուտքագրեք Ձեր տարիքը");
if (age2 > 0 && age2 <= 17) {
    alert("Պետք է սովորես");
} else if (age2 > 17 && age2 < 56) {
    alert("Պետք է աշխատես");
} else {
    alert("Թոշակառու");
}

// Առաջադրանք
// ՈՒնենալ 4թիվ և գտնել նրանցից մեծագույնը օգտագործելով if-else պայմանական օպերատորը։
let num1 = 14, num2 =  2, num3 = 124, num4 = 16;
let max = num1;

if (num2 > max) {
    max = num2;
} 

if (num3 > max) {
    max = num3;
} 

if (num4 > max) {
    max = num4;
}

console.log(`max = ${max}`);

////
max = num1;

if (num2 > max) {
    max = num2;
    
    if (num3 > max) {
        max = num3;

        if (num4 > max) max = num4;
    }
} else if (num3 > max) {
    max = num3;

    if (num4 > max) max = num4;
} else if (num4 > max) {
    max = num4;
}

console.log("max = " + max);


// Հաշվել թվի խորանարդ արմատը pow-ի միջոցով
let x = 64; //+prompt();
let result = Math.pow(x, 1/3); 
console.log(result);