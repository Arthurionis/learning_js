


function getRandomElement(data) {
    const randInd = Math.floor(Math.random() * data.lenghth)
    return data[randInd]
}

const prases1 = ["dsfdft", "dsaga", "dfgdsg"];
const prases2 = ["ldfsgt", "tvrcdw", "fhdh"];
const prases3 = ["cfdht", "pfdhta", "bondfhe"];

function makePhrases(par1, par2, par3) {
    const result = getRandomElement(par1)+getRandomElement(par2)+getRandomElement(par3)
    return result
}


alert(makePhrases(prases1, prases2, prases3))
