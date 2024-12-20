const chevy = {
    make: "Chevrolet",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
}
const cadic = {
    make: "GMC",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12800
}
const fiatic = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
}

// year>1955
// mileage<50 000

function prequal(car) {
    if (car.mileage < 50000 && car.year > 1955) {
        return true
    }
    return false
}
console.log(prequal(fiatic));
console.log(prequal(chevy));
console.log(prequal(cadic));

//продолжение add func loseweight
const fedy = {
    name: "Fedor",
    weight: 48,
    breed: "mixed",
    loves: "walks"
}

function loseweight(dog, amount) {
    dog.weight = dog.weight - amount;
}
loseweight(fedy, 10);
alert(fedy.weight);

// next add new object and new func for work with this object

const topSecretFile = {
    level: "classfield",
    opened: 0,
    pwssword: 2,
    contents: "Dr. Evil's next meeting is in Minsk."
}

// function getSecret(file, secretPassword) {
//     file.opened = file.opened + 1;
//     if (secretPassword === file.password) {
//         return file.contents;
//     } else {
//         return "Invalid password! Access denied."
//     }
// }
// getSecret(topSecretFile, 2)
// alert(topSecretFile.contents)
// console.log(topSecretFile);

function setSecret(file, secretPass, secret) {
    if (secretPass == file.password) {
        file.opened = 0;
        file.level = secret;
    }
}

setSecret(topSecretFile, 2, "scow.");
console.log(topSecretFile);

function changedPassword(file, secretPass, newPass) {
    if (secretPass == file.password) {
        file.password = newPass;
    }
}
changedPassword(topSecretFile, 2, 3)
console.log(topSecretFile)

