import { Car2 } from "./Car2";
export class luxoryCar extends Car2 {
    private carCost = 52368;
    private maxSpeed = 741258;
    constructor(protected carBrand: string, protected engineType: string) {
        super(carBrand, engineType);
    }

    checkCost(myMoney: number) {
        if (myMoney > this.carCost) {
            return `You can bay luxoryCar ${this.carBrand}, ${this.engineType}, price: ${this.carCost}, max speed ${this.maxSpeed}`;
        } else {
            return `You can't buy this car`;
        }
    }
}
