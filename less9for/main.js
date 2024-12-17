const scores = [78, 68, 45, 61, 46, 49, 63, 50, 55, 45, 69, 59, 80, 69, 77, 66, 46, 50, 53,
    79, 55, 57, 65, 49, 42, 54, 47, 80, 40, 44, 43, 68, 52, 79, 56, 33]

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

const highScore = getAndPrintHighScores(scores)
const bestScores = getNumbersBestScores(scores, highScore)
console.log("All tets: " + scores.length)
console.log("Highest score: " + highScore)
console.log("solutions with highest score:  " + bestScores);