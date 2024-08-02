// Առաջադրանք
// Ունենալ 2class:Առաջինի մեջ որպես constructor պահել 2 արգումենտ 
// և ունենալ ֆունկցիա ,որը կհաշվի այդ արգումենտների գումարը։
// 2-րդ class-ը պետք է ունենա constructor 3 արգումենտով որից 
// 2-ը պետք է ժառանգվի առաջին class-ից և պետք է ունենա ֆունկցիա 
// որ կհաշվի տվյալ 3 թվերի գումարը։
class ParentClass {
    constructor(num1, num2) {
        this._num1 = num1;
        this._num2 = num2;
    }

    sum() {
        return this._num1 + this._num2;
    }
}

class ChildClass extends ParentClass {
    constructor(num1, num2, num3) {
        super(num1, num2);
        this._num3 = num3;
    }

    sum() {
        return super.sum() + this._num3;
    }
}

let parent = new ParentClass(11, 5);
console.log(parent.sum());

let child = new ChildClass(5, 2, 7);
console.log(child.sum());


// Ունենք 10 հատ ուսանող, յուրաքանչյուրն ունի 5 հատ գնահատական: 
// Պետք է համեմատել բոլորի մոգերը, ստուգել բոլորը գերազանցիկ են թե ոչ
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getMog() {
        return this.marks.reduce((aggr, mark) => aggr + mark, 0) / this.marks.length;
    }
}

let students = [
    new Student("Bob", [2, 5, 6, 3, 4]),
    new Student("Alice", [5, 7, 6, 7, 8]),
    new Student("Ann", [5, 5, 6, 5, 4]),
    new Student("Tom", [7, 8, 9, 10, 8]),
    new Student("John", [4, 3, 5, 6, 4]),
    new Student("Kate", [9, 8, 10, 8, 7]),
    new Student("Michael", [5, 3, 7, 9, 2]),
    new Student("Kim", [3, 5, 1, 2, 2]),
    new Student("Albert", [1, 1, 2, 5, 3]),
    new Student("Mark", [10, 10, 8, 9, 10]),
];

let result = students.every(student => student.getMog() >= 8);
if (result) {
    console.log("Դասարանի արդյունքը լավ է:");
} else {
    console.log("Դասարանի արդյունքը վատ է:");
}

// Տպել բոլոր ուսանողներին էկրանին
let div = document.getElementById("show_students");
students.forEach(student => div.innerHTML += `<p>${student.name}</p>`);


// admin/user 
class User {
    constructor(name, surname, age, email) {
        this._name = name;
        this._surname = surname;
        this._age = age;
        this._email = email;
    }

    getEmail() {
        return this._email;
    }
}

class Admin extends User {
    deleteUser(user) {
        let x = users.find(u => u === user);
        if (x) {
            users = users.filter(u => u.getEmail() !== user.getEmail());
        } else {
            console.error("No such user!");
        }
        return users;
    }
}

let users = [
    new User("Anna", "Simonyan", 25, "anna@mail.ru"),
    new User("Hakob", "Karapetyan", 17, "hakob@gmail.com"),
    new User("Gayane", "Minasyan", 39, "gayane@gmail.com"),
];

let admin = new Admin("Mary", "Hakobyan", 47, "mary@mail.ru");
users = admin.deleteUser(users[2]);
console.log(users);
users = admin.deleteUser(users[1]);
console.log(users);


// Array prototype
Array.prototype.maximum = function() {
    let max = this[0];
    for (let i = 1; i < this.length; i++) {
        if (this[i] > max) {
            max = this[i];
        }
    }
    return max;
};
let arr = [5, 8, 11, 4, 25, 18];
console.log(arr.maximum());


// String prototype
String.prototype.capitalize = function() {
    let array = this.split(" ");
    for (let i = 0; i < array.length; i++) {
        let x = array[i].split("");
        x[0] = x[0].toUpperCase();
        array[i] = x.join("");
    }
    return array.join(" ");
}
let str = "hello world";
console.log(str.capitalize());


// function template prototype
function Person1(name, age) {
    this.name = name;
    this.age = age;
}

Person1.prototype.getAge = function() {
    return this.age;
}

let person1 = new Person1("Aram", 52);
console.log( person1.getAge() );


// Sorted 
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    getName() {
        return this._name;
    }

    getAge() {
        return this._age;
    }
}

let persons = [
    new Person("Mary", 28),
    new Person("Ashot", 35),
    new Person("Karen", 19),
    new Person("Alice", 52),
    new Person("Bob", 21),
];

let show_persons = document.querySelector(".show_persons");
let select = document.querySelector("select");
let sort_method = select.value;

function showPersons(persons) {
    show_persons.innerHTML = "";
    persons.forEach(person => {
        show_persons.innerHTML += `<p>${person.getName()} ${person.getAge()}</p>`;
    });
}

function sort(method) {
    if (method === "a_z") {
        for (let i = 0; i < persons.length; i++) {
            for (let j = i + 1; j < persons.length; j++) {
                if (persons[i].getName() > persons[j].getName()) {
                    let item = persons[j];
                    persons[j] = persons[i];
                    persons[i] = item;
                }
            }
        }
        showPersons(persons);
    }
    else if (method === "1_9") {
        for (let i = 0; i < persons.length; i++) {
            for (let j = i + 1; j < persons.length; j++) {
                if (persons[i].getAge() > persons[j].getAge()) {
                    let item = persons[j];
                    persons[j] = persons[i];
                    persons[i] = item;
                }
            }
        }

        showPersons(persons);
    }
}

showPersons(persons);
sort(sort_method);

select.addEventListener("change", e => {
    sort_method = e.target.value;
    sort(sort_method);
});



