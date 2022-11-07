import { luxoryCar } from "./luxoryCar";
import { SportCar } from "./SportCar";

const Ford = new luxoryCar("Ford", "Engine type ONE");
const Lamborgini = new SportCar("Lamborgini", "Engine type TWO");

console.log(Ford.checkCost(100));
console.log(Lamborgini.checkCost(1000));
