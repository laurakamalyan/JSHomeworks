// Առաջադրանք
// Հայտարարել փոխադրամիջոց անունով class։ Constructor-ի մեջ պահել անիվներ և մաքսիմալ արագություն արգումենտները։ 
// class-ը վերագրել որևէ  փոփոխականի  և փոխանցել 3 և 20 թվերը։Տպել արդյունքը։
// class Vehicle {
//     constructor(wheels, maxSpeed) {
//         this._wheels = wheels;
//         this._maxSpeed = maxSpeed;
//     }
// }

// let vehicle = new Vehicle(3, 20);
// console.log(vehicle);

// class Vehicle {
//     constructor(wheels, maxSpeed) {
//         this._wheels = wheels;
//         this._maxSpeed = maxSpeed;
//     }

//     getDate() {
//         return `${this._wheels}, ${this._maxSpeed}`;
//     }
// }

// let vehicle = new Vehicle(3, 20);
// console.log(vehicle.getDate());

// Առաջադրանք
// Հայտարարել մեքենա անունով class։Ավելացնել կոնստրուկտոր, որը վերցնում է մակնիշը, մոդելը, տարին և գույնը:
// Ավելացնել setColor անունով մեթոդ,որը վերցնում է մեկ պարամետր՝գույն և վերափոխում է մեքենայի գույնը:class-ը վերագրել 
// որևէ  փոփոխականի  և փոխանցել համապատասխան արժեքները։ Տպել արդյունքը։ Այնուհետև setColor մեթոդով փոխել մեքենայի գույնը 
// և կրկին տպել արդյունքը։
class Car {
    constructor(brand, model, year, color) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._color = color;
    }

    setColor(color) {
        this._color = color;
    }

    set changeColor(color) {
        this._color = color;
    }
}

let car = new Car("BMW", "X5", 2000, "black");
console.log(car);

car.setColor("blue");
console.log(car);

car.changeColor = "orange";
console.log(car);