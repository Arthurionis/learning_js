const scores = [ 78, 68, 45, 61, 46, 49, 63, 50, 55, 45, 69, 59, 80, 69, 77, 66, 46, 50, 53,
     79, 55, 57, 65, 49, 42, 54, 47, 80, 40, 44, 43, 68, 52, 79, 56, 33]

/*let i=0
let output
while(i<scores.length) {
    output = "bubble solutins # " + i + "scores: " +scores[i]
    console.log(output)
    i++
}*/

let highScore=0;

for (let i=0; i<scores.length; i++) {
    output = "bubble solutins # " + i + "scores: " +scores[i]
    console.log(output)
    if (highScore < scores[i]){
        highScore = scores[i]
    }
}

console.log("All tets: "+scores.length)
console.log(" score: "+highScore)

const bestScores=[]
for (let i=0; i<scores.length; i++){

if (highScore ===scores[i]){
    bestScores.push(i)
    }
}
console.log("solutions with highest score:  "+bestScores);
