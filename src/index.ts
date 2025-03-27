// index.ts
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// Corrected vehicles array with the missing 'wheels' argument added
const vehicles = [
  new Truck(
    Cli.generateVin(),
    "red",
    "Ford",
    "F-150",
    2021,
    5000,
    120,
    10000,
    [] // <- Added empty wheels array here
  ),
  new Car(
    Cli.generateVin(),
    'blue',
    'Toyota',
    'Camry',
    2021,
    3000,
    130,
    [] 
  ),
  new Motorbike(
    Cli.generateVin(),
    "black",
    "Harley Davidson",
    "Sportster",
    2021,
    500,
    125,
    [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")]
  )
];

// Create an instance of Cli and start it
const cli = new Cli(vehicles);
cli.startCli();
