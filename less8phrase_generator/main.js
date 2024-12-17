
function makePhrases() {
    const word1 = ["My cat", "My dog", "My parrot"];
    const word2 = ["loves to eat", "wants to chew", "always looking"];
    const word3 = ["carrot", "pasta", "bone"];

    const randomIndex1 = Math.floor(Math.random() * 3);
    const randomIndex2 = Math.floor(Math.random() * 3);
    const randomIndex3 = Math.floor(Math.random() * 3);

    const phrase = word1[randomIndex1] + " " + word2[randomIndex2] + " " + word3[randomIndex3];
    
    return phrase
}

const result = makePhrases()
alert(result)
console.log(result)