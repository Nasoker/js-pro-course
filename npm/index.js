/* Third Task */

const isAuth = () => {
    Math.random() <= 0.5 ? '/.index1.js' : '/.index2.js';
}
import (isAuth())
.then(console.log('Aaa'));