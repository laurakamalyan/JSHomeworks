// Գրել խաղ
// Թիվ ենք մտապահում և user-ը պետք է գուշակի այն
// Ինչ-որ միջակայքի թիվ պահել փոփոխականի տակ
// user-ը prompt-ով ներմուծի թիվը
// Եթե գուշակեց իմ պահած թիվը գրել ճիշտ է, եթե ոչ գրել սխալ է 
// Ու նորից մուտքագրի թիվը այնքան մինչև կգուշակի
let num1 = 8; // [5, 15]
let num2 = +prompt("Գուշակեք թիվը");
let b = false;

while (b === false) {
    if (num2 === num1) {
        alert("Ճիշտ է! Դուք հաղթեցիք");
        b = true;
    }
    else {
        num2 = +prompt("Սխալ է! Փորձեք կրկին");
    }
}


// Առաջադրանք
// var arr=[1,7,9,6,-5,1]
// Ստուգել զանգվածի սիմետրիկությունը։
// Սիմետրիկ զանգվածի օրինակա [1,2,3,4,3,2,1]
var arr = [1, 7, 9, 6, -5, 1];
let b1 = false;
let j = arr.length - 1;
for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] === arr[j]) {
        b1 = true;
    }
    else {
        b1 = false;
        break;
    }
    j--;
}

if (b1 === true) {
    console.log("Simetrik e");
}
else {
    console.log("Simetrik che");
}