// position of ships
const randomLoc = Math.floor(Math.random()*5); //от 0 до 4
const location1 = randomLoc+1;
const location2 = location1+1;
const location3 = location2+1;
// sink ship or not sink
let sinkship = false;
// attemt number value
let attempt;
// add counter of hits счётчик попаданий
let hits = 0;
//add counter of shoots счётчик выстрелов, попыток
let shoots = 0;
while (sinkship === false) {
    // + before "promt" means transformation into number value
    attempt = +prompt("Сделай выстрел. Нажми от 0 до 7.")
    if (attempt < 0 || attempt > 7) {
        alert("You make mistake? polupoker, hands from ass")
    } else {
        shoots = shoots+1

        // operator - logic "or" логическое или
        if (attempt === location1 || attempt === location2 || attempt === location3) {
            alert("Wow, you are sniper")
            hits = hits + 1
            if (hits === 3) {
                sinkship = true
                alert("you are WIN!!")
            }
        } else {
            alert("Miss, you are loshok")
        }

    }


}
const statistics=shoots
document.write("Сделано - "+shoots+" выстрелов. Из них - "+hits+" попаданий.")