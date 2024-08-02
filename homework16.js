// Ստանալ առանձին զանգվածով hobbie-ները
// hobbie-ները չպետք է կրկնվեն
// գրել foreach-ով
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
let hobbies = [];
persons.forEach(arr => {
    arr.hobbie.forEach(v => {
        if (!hobbies.includes(v)) {
            hobbies.push(v);
        }
    })
});
console.log(hobbies);

// Առաջադրանք
// Ստեղծել ֆունկցիա,որը կվերադարձնի ամսվա լրիվ անունը և
// որպես արգումենտ կստանա օր,ամիս,տարին։
function get_month(month_day, month, year) {
    let monts = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monts[month];
}

let d = new Date();
d.setMonth(10);
console.log( get_month( d.getDate(), d.getMonth(), d.getFullYear() ) );

// Առաջադրանք
// Ստեղծել ֆունկցիա,որը  որպես արգումենտ կստանա օր,ամիս,
// տարի և այդ տվյալների հիման վրա կվերադարձնի մարդու տարիքը։
let age = (day, month, year) => {
    let date = new Date();
    let current_year = date.getFullYear();
    
    return current_year - year;
}

console.log( age(22, 5, 2020) );

// Առաջադրանք
// Գրել ֆունցկիա որը կստուգի փոխանցված արգումենտի օրը հանգստյան է թե ոչ։
let weekend = date => {
    let day = date.getDay();
    if (day === 0 || day === 6) {
        return "Հանգստյան օր է";
    }
    return "Հանգստյան օր չէ";
}

d.setDate(24);
d.setMonth(5);
d.setFullYear(2024);
console.log( weekend(d) );                        

// Առաջադրանք
// Գրել ֆունցկիա որը կստուգի փոխանցված արգումենտի ժամը am է թե pm։
// a.m. – 00:00-ից մինչև 11:59
// p.m. – 12:00-ից մինչև 23:59
let hours = date => {
    let hours = date.getHours();
    if (hours >= 0 && hours < 12) {
        console.log(hours + "am");
    } else if (hours >= 12 && hours < 24) {
        console.log(hours + "pm");
    }
}
// d.setHours(20);
hours(d);

// Առաջադրանք
// let arr=[1,4,[5,7,[8,15,[12,14],55,]81,71],0]
// Տպել զանգվածի տարրերն օգտագործելով ռեկուրսիա։
function show( array ) {
    array.forEach( value => {
        if (typeof value === "object") {
            return show(value);
        }
        else {
            console.log(value);
        }
    });
}

const arr = [ 1, 4, [5, 7, [8, 15, [12, 14], 55], 81, 71], 0 ];
show( arr );

// Առաջադրանք
// let arr=[1,4,[5,7,[8,15,[12,14],55,]81,71],0]
// Տպել զանգվածի տարրերի արտադրյալը օգտագործելով ռեկուրսիա։
function multiplication( array, m ) {
    let x = array.reduce( (aggr, value) => {
        if (typeof value === "object") {
            return multiplication(value, aggr);
        }
        else {
            return aggr * value;
            
        }
    }, m);
    return x;
}

console.log( multiplication( arr, 1 ) );

// Առաջադրանք
// Ստեղծեք ֆունկցիա, որը կվերցնի ցանկացած տեսակի զանգված,այնուհետև ցիկլի
// տակ կստուգի այդ զանգվածների տարրերը:
// Եթե զանգվածի տարրը թիվ չէ, թող պատկերի, որ այդ զանգվածի տարրը թիվ չէ,
// հակառակ դեպքում, թող հաշվարկի այդ թվի քառակուսին և պատկերի ստացված արժեքը:
// Որպես զանգված օգտագործեք սա՝
var str = ["Հյութ", 13, "Թեյ", "9", true];
let func = function (arr) {
    arr.forEach( value => {
        if (typeof value !== "number") {
            console.log( "Թիվ չէ" );
        } else {
            console.log( value**2 );
        }
    });
}
func( str );