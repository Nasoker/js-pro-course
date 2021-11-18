/* First Task */
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const trace = msg => x => (console.log(msg, x), x);

const createArrayFromStringToLowerCase = str => str.toLowerCase();
split('');
const createArrayFromSet = arr => [...new Set(arr)];
const findingVowelsInArray = arr => arr.filter(letter => ['a', 'e', 'i', 'o', 'u'].includes(letter));

const counting = pipe(
    createArrayFromStringToLowerCase,
    createArrayFromSet,
    findingVowelsInArray,
);

console.log(counting("AaBaaaai"));

/* Second Task */


const countFib = () => {
    const cache = [1 n, 1 n];
    return n => {
        while (!cache[n]) {
            const nextNumber = cache[cache.length - 1] + cache[cache.length - 2];
            cache.push(nextNumber)
        }
        return cache[n]
    }
}
const fibo = countFib();


/* 3.1 Task */

const sum = a => b => b === undefined ? a : sum(a + b);

/* 3.2 Task */

const mul = a => b => b === undefined ? a : mul(a * b);

/* 3.3 Task */

const getStrongFunc = func => a => b === undefined ? a : getStrongFunc(func)(func(a, b));