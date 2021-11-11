/* First Task */
  const string = "AaBaaaai";
const arrayFromString = string.toLowerCase().split('');
const arrayOfVowels = ['a', 'e', 'i', 'o', 'u'];
const set = new Set(arrayFromString)
const arrayWithUniqueLetters = [...set];

const result = arrayWithUniqueLetters.filter(letter => arrayOfVowels.includes(letter));
console.log(result)  

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

const newMap = new WeakMap();

function addMessage(message) {
    const date = new Date();
    newMap.set(message, date);
}

function getTimeOfMessage(message) {
    return newMap.get(date);
} 


/* Third Task */

const input = ["tom", "xyz", "mot", "xel", "zXy", "yxz"];

function pushAnagramInArrays(array){
    const obj = {};

    array.forEach((inputWord) => {
        const key = inputWord.toLowerCase().split('').sort().join('');
        if (key in obj){
            obj[key].push(inputWord);
        }else{
            obj[key] = [inputWord]
        }
    });
    return Object.values(obj);
}
console.log(pushAnagramInArrays(input))
