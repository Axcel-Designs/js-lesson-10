// Task 1: Create a class of car with the following fields: numSeats, numbHeadLamps, fuelTankMaxLitre, numbExhaustPipe,convertible(boolean), numbOfDoors, numbOfEnginePlug(default to 4). Instantiate the class to create different types of cars using your car class(at least for).

class Car {
    constructor(seats, headLamps, fuelTankMaxLitre, exhaustPipe,convertible, doors,enginePlug) {
        this.numSeats = seats;
        this.numbHeadLamps = headLamps;
        this.fuelTankMaxLitre = fuelTankMaxLitre;
        this.numbExhaustPipe = exhaustPipe;
        this.convertible = convertible;
        this.numbOfDoors = doors;
        this.numbOfEnginePlug = enginePlug;  
    }
}

const toyota = new Car (4, 2, 25, 1, false, 4, 1);
console.log(toyota);

const honda = new Car (4, 2, 45, 1, false, 4, 1);
console.log(honda);

const lexus = new Car (4, 2, 55, 1, true, 4, 4);
console.log(lexus);

const kia = new Car (2, 2, 65, 1, true, 2, 2);
console.log(kia);
