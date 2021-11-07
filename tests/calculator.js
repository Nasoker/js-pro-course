const quadraticEquation = (a, b, c) => {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number') {
        return [NaN, NaN]
    }
    const discriminant = Math.pow(b, 2) - (4 * a * c);
    if (discriminant < 0) {
        return [NaN, NaN]
    } else if (discriminant === 0) {
        const root = (-b) / (2 * a);
        return [root, root]
    } else if (discriminant > 0) {
        const firstRoot = -(b / 2 * a) + Math.sqrt(discriminant / 4 * Math.pow(a, 2));
        const secondRoot = -(b / 2 * a) - Math.sqrt(discriminant / 4 * Math.pow(a, 2));
        return [firstRoot, secondRoot]
    }
}