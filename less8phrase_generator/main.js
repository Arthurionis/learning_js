function getRandomElement(array){
const RandomIndex=Math.floor(Math.random()*array.lenghth)
return array[RandomIndex]
}
function makePhrases() {
    const words1 = ["My cat", "My dog", "My parrot"];
    const words2 = ["loves to eat", "wants to chew", "always looking"];
    const words3 = ["carrot", "pasta", "bone"];
        return getRandomElemen(words1)+" "+getRandomElemen(words)+" "+getRandomElemen(words3)
}

alert(makePhrases())
