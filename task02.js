// Task 2: Create a class of phone, using your intuition, add at least the core five features of a phone as the core class fields. Instantiate the phone class to create different types of phone at least three.

class Phone {
    constructor(brand, model, os, length, batteryLife){
        this.brandName = brand;
        this.modelType = model;
        this.tyeofOS = os;
        this.length = length;
        this.batteryLife = batteryLife;
    }
}
const nokia = new Phone ('Nokia', 3310, `5m`, `6w`);
const apple = new Phone ('Iphone', 2, 'ios', `7m`, `20w`);
const microsoft = new Phone ('Lumia', 3780, `9m`, `78w`);

console.log(apple, '\n', apple, '\n', microsoft);


