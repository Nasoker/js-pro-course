/* First Task */
const pipe = (...fns) => x => fns.reduce((acc,fn) => fn(acc), x);

const trace = msg => x => (console.log(msg, x), x);

const createArrayFromStringToLowerCase = str => str.toLowerCase();split('');
const createArrayFromSet = arr => [...new Set(arr)];
const findingVowelsInArray = arr => arr.filter(letter => ['a', 'e', 'i', 'o', 'u'].includes(letter));

const counting = pipe(
    createArrayFromStringToLowerCase,
    createArrayFromSet,
    findingVowelsInArray,
);

console.log(counting("AaBaaaai"));

/* Second Task */
const c = number => {
    if (number <= 1){
        return number
    }else{
       return countFib(number-1)+countFib(number-2);
    }
}

const memoization = () => {
    const cache = {};
    return number => cache[number] || (cache[number] = countFib(number))
}


/* 3.1 Task */

/* 3.2 Task */

/* 3.2 Task */