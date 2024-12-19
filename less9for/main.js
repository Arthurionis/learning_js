const scores = [78, 68, 45, 61, 46, 49, 63, 50, 55, 45, 69, 59, 80, 69, 77, 66, 46, 50, 53,
    79, 55, 57, 65, 49, 42, 54, 47, 80, 40, 44, 43, 68, 52, 79, 56, 33]
const costs = [27, 28, 22, 26, 30, 29, 22, 26, 23, 26, 26, 24, 22, 29, 29, 24, 22, 27, 27,
    22, 29, 26, 24, 27, 23, 26, 28, 24, 29, 28, 23, 29, 23, 22, 24, 24]

function getAndPrintHighScores(array) {
    let output;
    let highScore = 0;
    for (let i = 0; i < array.length; i++) {
        output = "bubble solutins # " + i + "scores: " + array[i]
        console.log(output)
        if (highScore < scores[i]) {
            highScore = scores[i]
        }
    } return highScore
}

function getNumbersBestScores(ara, value) {
    const bestScores = []
    for (let i = 0; i < ara.length; i++) {

        if (value === ara[i]) {
            bestScores.push(i)
        }
    }
    return bestScores
}

function getMostCostEffectiveSolution(resultsCosts, costsArray, MaxValue) {
    let index;
    const bestsolutions = getNumbersBestScores(resultsCosts, MaxValue)
    if (costsArray[bestsolutions[0]] < costsArray[bestsolutions[1]]) {
        index = bestsolutions[0]
    } else { index = bestsolutions[1] }
    return index
}

const highScore = getAndPrintHighScores(scores)
const bestScores = getNumbersBestScores(scores, highScore)
const MostCost = getMostCostEffectiveSolution(scores, costs, highScore)
console.log("All tets: " + scores.length)
console.log("Highest score: " + highScore)
console.log("solutions with highest score:  " + bestScores);
console.log("Buble solutions # " + MostCost + " is the most cost effective");


