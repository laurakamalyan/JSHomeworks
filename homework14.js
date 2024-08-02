// Զանգվածներ
// Առաջադրանք
// Օգտվելով map մեթոդից զանգվածի բոլոր անդամների առաջին տառերը  դարձնել մեծատառ։
// Օգտագործել հետևյալ զանգվածը
const arr = ["john", "JACOB", "jinGleHeimer", "schmidt"];
// let new_arr = arr.map(value => {
//     let x = value.split("");
//     x[0] = x[0].toUpperCase();
//     let y = x.join("");
//     return y;
// });
// console.log(new_arr);

let x = arr.map( names => {
    return names[0].toUpperCase() + names.slice(1,).toLowerCase();
});

// Առաջադրանք
// Օգտվելով map մեթոդից զանգվածի բոլոր անդամների տառերը դարձնել մեծատառեր։
// Օգտագործել հետևյալ զանգվածը ["john", "JACOB", "jinGleHeimer", "schmidt"]
let new_arr2 = arr.map(value => value.toUpperCase());
console.log(new_arr2);

// Օբյեկտներ
// Առաջադրանք
// Ստեղծել ուսանող օբյեկտ,որը կունենա անուն,ազգանուն,մաթեմատիկա,օտար լեզու,
// կենսաբանություն,ֆիզիկա,ինֆորմատիկա բանալիներն ու համապատասխան արժեքները
// (առարկաների համար մինչև 100 բալ գնահատական)։Այնուհետև ստեղծել մեթոդ և հաշվել 
// ուսանողի ՄՈԳ-ը։ Եթե այդ թիվը մեծ է 80-ից,ապա alert պատուհանով տպել “գերազանց“ 
// արտահայտությունը։Եթե մեծ  է 70-ից տպել “լավ“։ Եթե մեծ է 40-ից տպել “բավարար“։
// Եթե փոքր է 40-ից տպել “հեռացնել բուհ-ից“ արտահայտությունը։
let student = {
    anun: "Bob",
    azganun: "Cooper",
    mathematica: 55,
    otar_lezu: 78,
    kensabanutyun: 100,
    fizika: 98,
    informatica: 64,

    mog: function () {
        let m = this.mathematica + this.otar_lezu + this.kensabanutyun + this.fizika + this.informatica;
        return m / 5;
    }
};

let mog = student.mog();
if (mog > 80) {
    // alert("Gerazanc");
} else if (mog > 70 && mog <= 80) {
    // alert("Lav");
} else if (mog > 40 && mog <= 70) {
    // alert("Bavarar");
} else {
    // alert("Heracnel buhic");
}

// Առաջադրանք
// Ստեղծել մարդ օբյեկտ,որը կունենա անուն,ազգանուն,տարիք և սեռ բանալիներն ու 
// համապատասխան արժեքները։Ստուգել սեռը, եթե սեռը իգական է, ապա ստուգել տարիքը։
// Եթե տարիքը՝
// 1-ից 17-ի միջակայքում է տպել “փոքր աղջիկ“
// 17-ից  63-ի միջակայքում է  տպել “չափահաս մարդ“
// 63-ից մեծ է տպել “տատիկ“
// Եթե սեռը արական է,ապա ստուգել տարիքը ։Եթե տարիքը՝
// 1-ից 17-ի միջակայքում է տպել “փոքր տղա“
// 17-ից  63-ի միջակայքում է  տպել “չափահաս մարդ“
// 63-ից մեծ է տպել “պապիկ“

let person = {
    name: "Ani",
    surname: "Karapetyan",
    age: 42,
    gender: "female",
    // get: function () {
    //     if (this.gender === "female") {
    //         if (this.age >= 1 && this.age <= 17) {
    //             console.log("poqr axjik");
    //         } else if (this.age > 17 && this.age <= 63) {
    //             console.log("chapahas mard");
    //         } else if (this.age > 63) {
    //             console.log("tatik");
    //         }
    //     } else {
    //         if (this.age >= 1 && this.age <= 17) {
    //             console.log("poqr txa");
    //         } else if (this.age > 17 && this.age <= 63) {
    //             console.log("chapahas mard");
    //         } else if (this.age > 63) {
    //             console.log("papik");
    //         }
    //     }
    // }
};

// person.get();
function get() {
    if (person.gender === "female") {
        if (person.age >= 1 && person.age <= 17) {
            console.log("poqr axjik");
        } else if (person.age > 17 && person.age <= 63) {
            console.log("chapahas mard");
        } else if (person.age > 63) {
            console.log("tatik");
        }
    } else {
        if (person.age >= 1 && person.age <= 17) {
            console.log("poqr txa");
        } else if (person.age > 17 && person.age <= 63) {
            console.log("chapahas mard");
        } else if (person.age > 63) {
            console.log("papik");
        }
    }
}
get();


// 1) Person զանգվածում եղած բոլոր հոբբիները ցույց տալ 1 ընդհանուր զանգվածի մեջ։
// 2) Տպել բոլոր մարդկանց անուն ազգանունները console բաժնում
persons = [
    {
        id: 325326,
        firstname: "Dan",
        lastname: "Tiger",
        image: "url",
        birthday: "03.18.1990",
        gender: "Male",
        hobbie: ["Football", "Reading"],
        nationality: "switzerland",
        friends: [325330, 325334],
        residence: 10041
    },
    {
        id: 325326,
        firstname: "Fan",
        lastname: "Tiger",
        image: "url",
        birthday: "03.18.2005",
        gender: "Male",
        hobbie: ["Football", "Reading"],
        nationality: "switzerland",
        friends: [325330, 325334],
        residence: 10041
    },
    {
        id: 325330,
        firstname: "Frank",
        lastname: "Lion",
        image: "url",
        birthday: "10.05.1991",
        gender: "male",
        hobbie: ["walking", "basketball"],
        nationality: "syria",
        friends: ["", "", ""],
        residence: 10041
    },
    {
        id: 325334,
        firstname: "Bilal",
        lastname: "Zakki",
        image: "url",
        birthday: "08.19.1999",
        gender: "male",
        hobbie: ["swimming", "walking"],
        nationality: "canda",
        friends: [325330, 325326],
        residence: 10012
    }
]

let hobbie = [];
for (value of persons) {
    for (val of value.hobbie) {
        hobbie.push(val);
    }
}
console.log(hobbie);

for (value of persons) {
    console.log(`${value.firstname} ${value.lastname}`);
}