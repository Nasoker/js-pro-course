/* Second Task */
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
 
console.log(array); 
/* Third Task */

const isAuth = () =>{
    Math.random() <= 0.5 ? '/.index1.js' : '/.index2.js';
}
import(isAuth())
    .then(console.log(isAuth()))

