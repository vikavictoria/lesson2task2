import { Car2 } from "./Car2";
export class SportCar extends Car2 {
    private carCost = 12;
    private maxSpeed = 150;
    constructor(protected carBrand: string, protected engineType: string) {
        super(carBrand, engineType);
    }

    checkCost(myMoney: number) {
        if (myMoney > this.carCost) {
            return `You can bay sportCar ${this.carBrand}, ${this.engineType}, price: ${this.carCost}, max speed ${this.maxSpeed}`;
        } else {
            return `You can't buy this car`;
        }
    }
}
