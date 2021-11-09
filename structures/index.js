/* First Task */
 const string = "AaBaaaai";
const arrayFromString = string.toLowerCase().split('');
const arrayOfVowels = ['a', 'e', 'i', 'o', 'u'];
const set = new Set(arrayFromString)
const arrayWithUniqueLetters = [...set];
const returnedArray = [];

const result = arrayWithUniqueLetters.filter(letter => {
    if (arrayOfVowels.includes(letter)) {
        returnedArray.push(letter)
    }
});
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
const defaultHashFunc = (value) => value.toString();

class HashTable {
    constructor(hashFunction) {
        this.hashFunction = hashFunction || defaultHashFunc;
        this.storage = {};
    }

    add = (value) => {
        let hash = this.hashFunction(value);
        if (this.storage[hash] === undefined) {
            this.storage[hash] = [value];
        } else {
            this.storage[hash].push(value);
        }
    }

    remove = (value) => {
        let hash = this.hashFunction(value);
        if (!this.storage[hash]) {
            return;
        } else if (this.storage[hash].length === 1) {
            delete this.storage[hash];
        } else {
            for (let i = 0; i < this.storage[hash].length; i++) {
                if (this.storage[hash][i][0] === value) {
                    return delete this.storage[hash][i];
                }
            }
        }
    }

    lookup = (value) => {
        let hash = this.hashFunction(value);
        return this.storage[hash] || [];
    }
}

const input = ["tom", "xyz", "mot", "xel", "zXy", "yxz"];
let arrayOfWords = [];

input.forEach((inputWord) => {
    arrayOfWords.push(inputWord.toLowerCase().split('').sort().join(''));
});

const setOfWords = new Set(arrayOfWords);
const keys = [...setOfWords]; /* tom, xyz, xel */
const hashTable = new HashTable();
const result = arrayOfWords.filter(word => {
    if (keys.includes(word)) {
        let index = arrayOfWords.indexOf(word);
        hashTable.add(input[index]);
    }
});
console.log(hashTable)