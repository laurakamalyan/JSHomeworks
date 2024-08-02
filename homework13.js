// Առաջադրանք
// Գրել ծրագիր,որը կվերադարձնի ամենաերկար երկրի անունը։
// Օգտագործել հետևյալ զանգվածը 
const countries = ["Australia", "Germany", "United States of America"];
function long_country(arr) {
    let long = arr[0];
    arr.forEach( value => {
        if (value.length > long.length) {
            long = value;
        }
    });
    return long;
}
console.log(long_country(countries));


// Առաջադրանք
// let str=“Im anunn e Anna“;
// String-ի մեջ եղած n-երը փոխարինել xy տառերով։
let str = "Im anunn e Anna";
let new_str = str.replaceAll("n", "xy");
console.log(new_str);

// Առաջադրանք
// Օգտագործելով ֆունկցիա գրել սիմետրիկություն String-ի համար։String-ը 
// ներմուծել prompt պատուհանի միջոցով։Եթե String-ը սիմետրիկ է տպել true,
// եթե ոչ տպել false։
function simetric(str) {
    let result = false;
    let arr = str.split("");
    
    for ( let i = 0; i < arr.length / 2; i++ ) {
        if ( arr[i].toLowerCase() === arr[arr.length - 1 - i].toLowerCase() ) {
            result = true;
        } else {
            result = false;
            break;
        }
    }
    
    return result;
}

let string = prompt();
let result = simetric(string);

if (result) {
    console.log("Սիմետրիկ է");
} else {
    console.log("Սիմետրիկ չէ");
}

// Առաջադրանք
// Ստեղծեք ֆունկցիա fullName(), որը կհարցնի օգտվողի անունը, ազգանունը և 
// հայրանունը,այնուհետև կվերադարձնի արժեքները մեկ տողով՝ իրարից անջատված 
// մեկ տարածությամբ:
function fulName() {
    let name = prompt("Input your name");
    let surname = prompt("Input your surname");
    let patronymic = prompt("Input your father name");

    // let arr = [];
    // arr.push(name);
    // arr.push(surname);
    // arr.push(patronymic);
    // return arr.join(" ");

    // return name + " " + surname + " " + patronymic;
    // return name.concat(" ", surname, " ", patronymic);
    return `${name} ${surname} ${patronymic}`;
}

console.log(fulName());

// Առաջադրանք
// Ստեղծեք հարց օգտվողի համար prompt()պատուհանի միջոցով։
// Ճիշտ պատասխանը նախօրոք պահեք answer փոփոխականում (փոքրատառերով):
// Օգտվողի կողմից պատասխանը ստանալուց հետո, այն դարձրեք ամբողջությամբ փոքրատառերով,
// այնուհետև համեմատեք ճիշտ պատասխանի հետ:
// Եթե պատասխանը ճիշտ է, օգտվողին ցուցադրեք, որ պատասխանը ճիշտ է,եթե ոչ, 
// ապա ցուցադրեք, որ պատասխանը ճիշտ չէ:
// Այն ժամանակ, երբ արդեն պատրաստ կլինի ծրագիրը,փորձեք պատասխանել, 
// մուտքագրելով տարբեր տառեր՝ մեծատառ, փոքրատառ:
// Այնուհետև ժամանակավորապես հեռացրեք toLowerCase() մեթոդը և հետևեք իրադարձությանը,
// այս երևույթը JavaScript-ում ավելի լավ յուրացնելու համար:

let question = prompt("Ո՞րն է հայ ժողովրդի ազգային էպոսը:")
let answer = "սասնա ծռեր"; 

if (question.trim().toLowerCase() === answer) {
    alert("Պատասխանը ճիշտ է");
} else {
    alert("Պատասխանը ճիշտ չէ");
}