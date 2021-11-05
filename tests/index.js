const firstNumber = document.querySelector('.first-undefined-variable');
const secondNumber = document.querySelector('.second-undefined-variable');
const thirdNumber = document.querySelector('.third-undefined-variable');
const firstOutput = document.querySelector('.first-output');
const secondOutput = document.querySelector('.second-output');
const thirdOutput = document.querySelector('.third-output');
const firstRootOutput = document.querySelector('.first-root');
const secondRootOutput = document.querySelector('.second-root');

const handleChange = () => {
    const x = firstNumber.value;
    const y = secondNumber.value;
    const z = thirdNumber.value;
    firstOutput.innerText = x;
    secondOutput.innerText = y;
    thirdOutput.innerText = z;
    quadraticEquation(x, y, z);
};

firstNumber.addEventListener("change", handleChange);
secondNumber.addEventListener("change", handleChange);
thirdNumber.addEventListener("change", handleChange);