let input = document.getElementById("inp");
let p = document.getElementsByClassName("p1")[0];
let div = document.getElementsByClassName("div1")[0];
let btn = document.getElementById("btn");

// Առաջադրանք
// HTML-ում ստեղծել input,button և p թեգերը։Օգտագործելով հետևյալ հասցեն՝
// https://jsonplaceholder.typicode.com/users ՝  ստեղծել ծրագիր,որտեղ  
// input-ում մուտքագրված անուն- ազգանունը կհամեմատենք հասցեում նշված 
// user-ների անվան և ազգանվան հետ և եթե համընկնեն,ապա ցուցադրել տվյալ 
// մարդու էլեկտրոնային հասցեն՝ տեղադրված p թեգի մեջ,հակառակ դեպքում տպել 
// հետևյալ հաղորդագրությունը՝ "Տվյալ անունով user չի գտնվել"։ Նախապես 
// ստուգել,որ input-ի պարունակությունը դատարկ չէ։Ծրագիրը իրականացնելու 
// համար տեղադրել click event-ը button թեգի վրա։

// async function full_name(name) {
//     try {
//         await fetch("https://jsonplaceholder.typicode.com/users")
//             .then(res => res.json())
//             .then(data => data.find(val => val.name === name))
//             .then(user => {
//                 if (user) {
//                     p.innerHTML = user.email;
//                 } else {
//                     throw new Error("Տվյալ անունով user չի գտնվել");
//                 }
//             })
//     } catch (error) {
//         p.innerHTML = error.message;
//     }
// }

// let fullname = "";
// input.addEventListener("keyup", e => fullname = e.target.value );

// btn.addEventListener("click", () => {
//     if (fullname) {
//         full_name(fullname);
//     }
// });

// Առաջադրանք
// HTML-ում ստեղծել input,button և div թեգերը։Օգտագործելով հետևյալ հասցեն՝
// http://api.tvmaze.com/search/shows?q=Titanik ` ստեղծել ծրագիր,որտեղ
// input-ում կմուտքագրենք որևէ ֆիլմի անուն և կստանանք ֆիլմի անունը,նկարը և
// ժանրը՝ հավաքված div թեգի մեջ։Նախապես ստուգել,որ input-ի պարունակությունը
// դատարկ չէ։Ծրագիրը իրականացնելու համար տեղադրել click event-ը button թեգի վրա։

// function show(film) {
//     div.innerHTML = `
//         <div>
//             <h2>${film.show.name}</h2>
//             <img src="${film.show.image.original}" alt="" width="200px">
//             <p>${film.show.type}</p>
//         </div>
//     `;
// }

// btn.addEventListener("click", () => {
//     let film_name = input.value;
//     if (input.value) {
//         fetch("http://api.tvmaze.com/search/shows?q=Titanik")
//             .then(res => res.json())
//             .then(films => films.find(val => val.show.name === film_name))
//             .then(film => {
//                 if (film) show(film);
//             });
//     }
// });



// 
// async function show_details(film_name) {
//     let film = {};

//     try {
//         await fetch("http://api.tvmaze.com/search/shows?q=Titanik")
//             .then(res => res.json())
//             .then(films => films.find(val => val.show.name === film_name))
//             .then(film => {
//                 if (film) show(film);
//                 else throw new Error("err");
//             });
//     } catch(error) {
//         console.error(error.message);
//     }

//     return film;
// }

// btn.addEventListener("click", () => {
//     let film_name = input.value;
//     if (film_name) show_details(film_name);
// });





// Առաջադրանք
// HTML-ում ստեղծել div թեգ։Օգտագործելով հետևյալ հասցեն՝
// https://corona-api.com/countries/am ` ստեղծել ծրագիր,որտեղ կստանաք
// տվյալ օրվա վարակվածների թիվը և այն կտպեք էկրանին։

"https://covid-api.com/api/docs/api-docs.json"

// link-ը չի աշխատում, error է տալիս


async function get_death_count() {
    let arr = [];
    await fetch("https://covid-api.com/api/reports")
    .then(res => res.json())
    .then(data => arr = data.data);

    return arr;
}

get_death_count().then(data => {
    data.forEach(val => {
        // console.log(val);
        // if (val.date.date === "2024-07-20")
        console.log(val.region.name);
    })
});


// HTML-ում ստեղծել button թեգ։Օգտագործելով հետևյալ հասցեն՝
// https://jsonplaceholder.typicode.com/users ՝ստեղծել ծրագիր,որտեղ button
// թեգին սեղմելիս կստանանք բոլոր user-ների id,name,email,address,city,street,
// geo,lat,lng տվյալները։ Տվյալները տպելու համար ստեղծել p թեգեր,որոնք հավաքված
// կլինեն մեկ ընդհանուր  div թեգի մեջ։Այնուհետև յուրաքանչյուր user-ի տվյալների
// տակ ստեղծել button թեգ,որին սեղմելիս կստանանք տվյալ user-ի տարածաշրջանի
// ջերմաստիճանը։ ։ Ջերմաստիճանը ստանալու համար օգտվել հետևյալ հղումից
// https://api.openweathermap.org/data/2.5/weather?lat=-37.3159&lon=81.1496&APPID=f8ecd14f4515b8ee0fcb3bcdef8f9efe,
// որտեղ lon և lat արժեքները պետք է փոխվեն տվյալ user-ի հասցեով։

// function show(users) {
//     users.forEach(user => {
//         div.innerHTML += `
//             <div>
//                 <p>${user.id}</p>
//                 <p>${user.name}</p>
//                 <p>${user.email}</p>
//                 <p>${user.address.city}</p>
//                 <p>${user.address.street}</p>
//                 <p>${user.address.geo.lat}</p>
//                 <p>${user.address.geo.lng}</p>
//                 <button onclick="temperature(${user.address.geo.lat}, ${user.address.geo.lng})">Temperature</button>
//             </div>
//         `;
//     });
// }

// function temperature(lat, lng) {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=f8ecd14f4515b8ee0fcb3bcdef8f9efe`)
//     .then(res => res.json())
//     .then(data => data.main.temp)
//     .then(temp => alert(temp))
// }

// btn.addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => show(data))
// });

// Առաջադրանք
// Ստեղծել ասինքրոն ծրագիր,որը https://jsonplaceholder.typicode.com/users
// հղումից կստանա user-ների տվյալները,կսպասի բոլոր տվյալների ստացմանը և
// console պատուհանում կտպի այն։

// async function users_data() {
//     let users = [];
//     try {
//         await fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res => res.json())
//         .then(data => users = data)
//     } catch(error) {
//         console.log(error.message);
//     }

//     return users;
// }

// users_data().then(res => {
//     res.forEach(val=> {
//         console.log(val);
//     })
// });


// Առաջադրանք
// Ստեղծել ասինքրոն ֆունկցիա,որը կունենա իր մեջ  new  Promise համապատասխան 
// արգումենտներով։ Promise-ի մեջ ստեղծել setTimeout ֆունկցիա,որը օգտագործելով  
// resolve կտպի “done“ բառը։ Այնուհետև await-ում սպասել գործողության ավարտին 
// և տպել արդյունքը։

// async function f() {
//     let promise = new Promise( resolve => {
//         setTimeout(() => {
//             resolve("done")
//         }, 3000);
//     })

//     await promise.then(res => {
//          console.log(res);
//     })
// }

// f();


// Առաջադրանք
// Ստեղծել փոփոխական և նրան վերագրել +prompt()։Ստեղծել ասինքրոն ֆունկցիա,որն իր 
// մեջ կպարունակի try և կսպասի https://api.punkapi.com/v2/beers?per_page=10 հղման
// պատասխանին,որտեղ 10 թվի փոխարեն պետք է լինի prompt-ում ներմուծված արժեքը։Եթե 
// այդպիսի թիվ չի գտնվել ստեղծել error 'Data not fetched!' հաղորդագրությամբ։
// Եթե ամեն ինչ ճիշտ է տպել պարունակությունը էկրանին։

// link-ը չի աշխատում, error է տալիս
// fetch("https://api.punkapi.com/v2/beers?per_page=10")



// fetch-ի error-ը ոնց բռնենք? 

// let num = 285; // +prompt();
// async function f() {
//     try {
//         await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)
//         .then(res => res.json())
//         .then(data => {
//             if (Object.keys(data).length !== 0) console.log(data);
//             else throw new Error("Data not fetched!");
//         }) 

//     } catch(error) {
//         console.error(error.message);
//     }
// }

// f();




async function f() {
    // try {
    //     await fetch(`https://jsonplaceholder.typicode.com/posts/385`)
    //     .then(res => {
    //         if (res.ok) return res.json();
    //         else throw new Error("errrrrrrrrrrrrr");
    //     })
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(err => console.log(err.message))

    // } catch {
    //     console.log(6); // sa yndhanrapes chi ashxatum
    // el imast uni try catch grelu????????????????????????
    // }

    await fetch(`https://jsonplaceholder.typicode.com/posts/385`)
        .then(res => {
            if (res.ok) return res.json();
            else throw new Error("errrrrrrrrrrrrr");
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err.message))
}

f();


//////////////////////////////////////////////
// comments api
// input-ի մեջ գրել թիվ և էկրանին տպել այդ համարի comment-ի name-ը և email-ը
// async function f(number) {
//     await fetch(`https://jsonplaceholder.typicode.com/comments/${number}`)
//     .then(res => res.json())
//     .then(data => {
//         let h2 = document.createElement("հ2");
//         let p1 = document.createElement("p");
//         h2.innerHTML = data.name;
//         p1.innerHTML = data.email;
//         div.append(h2);
//         div.append(p1);
//     })
// }

// btn.addEventListener("click", () => {
//     let num = document.getElementById("num").value;
//     if (num !== "")
//         f(num);
// })

// prompt-ում գրել թիվ և տպել այդքան հատ comment
// async function f(limit) {
//     let result = [];
//     await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`)
//     .then(res => res.json())
//     .then(data => result = data)

//     return result;
// }

// let limit = 5;// +prompt();
// let x = f(limit).then(comments => {
//     comments.forEach(comment => {
//         console.log(comment);
//     })
// });
