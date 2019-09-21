const Fizzbuzz = require("./fizzbuzz");

describe("Test Fizzbuzz", () => {
    test("Test 1 expect 1", () => {
        const result = Fizzbuzz.say(1);
        expect(result).toEqual(1) // Assert Function

    });
});