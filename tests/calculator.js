const quadraticEquation = (a, b, c) => {
    const discriminant = Math.pow(b, 2) - (4 * a * c);
    if (discriminant < 0) {
        return /* alert('Корней нет'), */ NaN, NaN
    } else if (discriminant === 0) {
        const root = (-b) / (2 * a);
        /* firstRootOutput.innerText = root; */
        return root
    } else if (discriminant > 0) {
        const firstRoot = -(b / 2 * a) + Math.sqrt(discriminant / 4 * Math.pow(a, 2));
        const secondRoot = -(b / 2 * a) - Math.sqrt(discriminant / 4 * Math.pow(a, 2));
        /*  firstRootOutput.innerText = firstRoot;
         secondRootOutput.innerText = secondRoot; */
        return firstRoot, secondRoot
    }
}