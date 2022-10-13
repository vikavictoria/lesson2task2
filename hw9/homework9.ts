class Planet {
    static planet_size = 666;

    color: string;
    temperature: number;
    moon_count: number;
    is_Giant: boolean;
    planet_name: string;

    constructor(color: string, temperature: number, moon_count: number, is_Giant: boolean, planet_name: string) {
        this.color = color;
        this.temperature = temperature;
        this.moon_count = moon_count;
        this.is_Giant = is_Giant;
        this.planet_name = planet_name;
    }

    showPlanet() {
        return `this is a ${this.planet_name} and it has ${this.color} color, ${Planet.planet_size} size, ${this.temperature} degrees, moon count is : ${this.moon_count}. Is it Giant? - ${this.is_Giant} `;
    }
}

const jupiter = new Planet("white", -110, 80, true, "Jupiter");
const venus = new Planet("yellow-white", 464, 0, false, "Venus");
const neptune = new Planet("blue", -200, 14, true, "Neptune");
const mercury = new Planet("gray", 167, 0, false, "Mercury");

console.log(jupiter.showPlanet());
console.log(venus.showPlanet());
console.log(neptune.showPlanet());
console.log(mercury.showPlanet());
