describe("проверка функции вычисления корней квадратных уравнений", () => {

    describe("кейсы с двумя корнями", () => {
        it("1х² - 2x -3 = 0", () => {
            assert.equal(quadraticEquation(1, -2, -3), (3, -1));
        });
        it("-1х² - 2x + 15 = 0", () => {
            assert.equal(quadraticEquation(-1, -2, 15), (3, -5));
        });
        it("1х² - 70x + 600 = 0", () => {
            assert.equal(quadraticEquation(1, -70, 600), (60, 10));
        });
    });
    describe("кейсы с одним корнем", () => {
        it("3х² - 18x + 27 = 0", () => {
            assert.equal(quadraticEquation(3, -18, 27), 3);
        });
        it("-4х² - 28x - 49 = 0", () => {
            assert.equal(quadraticEquation(-4, 28, -49), 3.5);
        });
        it("2х² + 8x + 6 = 0", () => {
            assert.equal(quadraticEquation(2, 8, 6), -12);
        });
    });
    describe("кейсы без корней", () => {
        it("2х² + 8x + 50 = 0", () => {
            assert.isNaN(quadraticEquation(2, 8, 50), (NaN, NaN));
        });
        it("10х² + 4x + 30 = 0", () => {
            assert.isNaN(quadraticEquation(10, 4, 30), (NaN, NaN));
        });
        it("10х² + 1x + 1 = 0", () => {
            assert.isNaN(quadraticEquation(10, 1, 1), (NaN, NaN));
        });
    });
});