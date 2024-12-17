// const randomLoc = Math.floor(Math.random()*5); //от 0 до 4
// const location1 = randomLoc+1;
// const location2 = location1+1;
// const location3 = location2+1;

// let attempt;

// if (attempt === location1 || attempt === location2 || attempt === location3) {
//     alert("Wow, you are sniper")
//     hits = hits + 1
//     if (hits === 3) {
//         sinkship = true
//         alert("you are WIN!!")
const inStock = true;
const onSale = true;

// if (inStock === true) {
//     if(onSale === true){
//         alert("Беру")

//     }
// }
const price = 100;
if (inStock  && onSale ){
    alert("buy")
} else {
    alert("sorry")
}

const temp = 83;
const willRain = true;
const humid = (temp>80 && willRain)
console.log(humid);

const itbuy = (onSale && inStock)
console.log(itbuy);
