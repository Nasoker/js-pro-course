const quadraticEquation = (a, b, c) => {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number') {
        return [NaN, NaN]
    }
    const discriminant = Math.pow(b, 2) - (4 * a * c);
    if (discriminant < 0) {
        return [NaN, NaN]
    } else if (discriminant >= 0) {
        const firstRoot = (-b + Math.sqrt(discriminant))/(2*a);
        const secondRoot = (-b - Math.sqrt(discriminant))/(2*a);
        return [firstRoot, secondRoot]
    }
}