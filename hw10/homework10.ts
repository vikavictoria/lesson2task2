//task 1
console.log("task 1");
class Car {
    constructor(protected carBrand: string, protected engineType: string) {
        this.carBrand = carBrand;
        this.engineType = engineType;
    }
}
class SportCat extends Car {
    private carCost = 52368;
    private maxSpeed = 741258;
    constructor(protected carBrand: string, protected engineType: string) {
        super(carBrand, engineType);
    }
    showCarInfo() {
        return `this is ${this.carBrand}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed} . Approximately cost of the car is ${this.carCost}.`;
    }
}

class LuxuryCar extends Car {
    private maxSpeed = 25;
    carCostLuxury: number;
    constructor(protected carBrand: string, protected engineType: string, carCostLuxury: number) {
        super(carBrand, engineType);
        this.carCostLuxury = carCostLuxury;
    }
    showCarInfo() {
        return `this is ${this.carBrand}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed} . Approximately cost of the car is ${this.carCostLuxury}.`;
    }
}

const car1 = new SportCat("Ferrari", "Engine type ONE");
const car2 = new LuxuryCar("BMW", "Engine type TWO", 111111111);

console.log(car1.showCarInfo());
console.log(car2.showCarInfo());

//task 2
console.log("task 2");
const human1: { nameHuman?: string } = {
    nameHuman: "vika",
};
const human2: { nameHuman?: string } = {
    nameHuman: "naruto",
};

function myName(this: any) {
    console.log(`My name is ${this.nameHuman}`);
}

myName.call(human1);
myName.call(human2);

//task 3
console.log("task 3");

const carOne = {
    doorsCount: 14,
    side: "left",
};
const carTwo = {
    doorsCount: 2,
    side: "right",
};
function CarInformation(this: any) {
    console.log(`This car has ${this.doorsCount} doors and this is ${this.side}-hand drive car`);
}

CarInformation.apply(carOne);
CarInformation.apply(carTwo);
