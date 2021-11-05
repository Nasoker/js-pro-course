/* First Task */
const string = "AaBaaaai";
const set = new Set();
const arrayFromString = string.toLowerCase().split('');
const arrayOfVowels = ['a', 'e', 'i', 'o', 'u'];
arrayFromString.forEach((arr) => {
    set.add(arr);
});
const arrayWithUniqueLetters = [...set];
const returnedArray = [];

for (let i = 0; i < arrayWithUniqueLetters.length; i++) {
    if (arrayOfVowels[i] === arrayWithUniqueLetters[i]) {
        returnedArray.push(arrayOfVowels[i])
    }
}

console.log(returnedArray)

/* Second Task */

const messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

addMessage(messages[0]);
setTimeout(() => addMessage(messages[1]), 1000);
setTimeout(() => addMessage(messages[2]), 2000);
console.log(messages)

setTimeout(() => {
    messages.splice(1, 1);
    messages.forEach(message => console.log(getTimeOfMessage(messages)));
}, 2100);

function addMessage(message) {
    const newMap = new Map();
    const date = new Date();
    newMap.set('text', message);
    newMap.set('time', date);
}

function getTimeOfMessage(message) {
    return message.get('time');
}


/* Third Task */

const input = ["tom", "xyz", "mot", "xel", "zXy", "yxz"];
let arrayOfWords = [];

input.forEach((inputWord) => {
    arrayOfWords.push(inputWord.toLowerCase().split('').sort().join(''));
});