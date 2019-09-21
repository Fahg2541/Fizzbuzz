class Fizzbuzz {
    static say(number) {
        // if (number % 3 == 0 && number % 5 == 0) {
        //     return ("Fizzbuzz");
        // }
        // else if (number % 3 == 0) {
        //     return ("Fizz");
        // }
        // else if (number % 5 == 0) {
        //     return ("Buzz");
        // }
        // else {
        //     return number
        // }
        // let number = ;
        switch (true) {
            case this.mod(number, 15) === 0:
                return ("Fizzbuzz");

            case this.mod(number, 3) === 0:
                return ("Fizz");

            case this.mod(number, 5) === 0:
                return ("Buzz");
            default:
                return number;


        }
    }

    static mod(number, base) {
        // while (number >= base) {
        //     number -= base;
        // }
        return number - Math.floor(number / base) * base;
    }
}
module.exports = Fizzbuzz;