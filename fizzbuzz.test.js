const Fizzbuzz = require("./fizzbuzz");

describe("Test Fizzbuzz", () => {
    test("Test 3 expect 3", () => {
        const result = Fizzbuzz.say(3);
        expect(result).toEqual("Fizz") // Assert Function

    });
    test("Test 5%5 expect 0", () => {
        const result = Fizzbuzz.mod(5)
    })




});