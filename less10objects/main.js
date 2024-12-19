//cars:

// make:"Chevy",
// model:"Bel Air",
// year:1957,
// color:red,
// passengers:2,
// convertible: false,
// mileage: 1021;

// dog:

// name:Fido,
// weight:20.2,
// age:5,
// breed:"mixed",
// activity: "fetch balls"

const car = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
}

const dog = {
    name: "Fido",
    weight: 20.2,
    age: 5,
    breed: "mixed",
    activity: "fetch balls"
}

console.log(dog.name);
//change weigth
dog.weight = 24
console.log(dog.weight);
//add isDog
dog.isDog = true;
console.log(dog);
//deleted activity
delete dog.activity
console.log(dog);
//пример использования
if (car.mileage < 50000) {
    alert ("Buy it!")
} else {
    alert ("Too expensive")
}

