import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';
import Car from './Car.js';
import Motorbike from './Motorbike.js';

class Truck extends Vehicle implements AbleToTow {
  vin: string; color: string; make: string; model: string;
  year: number; weight: number; topSpeed: number;
  wheels: Wheel[]; towingCapacity: number;

  constructor(
    vin: string, color: string, make: string, model: string,
    year: number, weight: number, topSpeed: number, towingCapacity: number,
    wheels: Wheel[] = []
  ) {
    super();
    this.vin = vin; this.color = color; this.make = make; this.model = model;
    this.year = year; this.weight = weight; this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

  tow(vehicle: Truck | Motorbike | Car): void {
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${this.make} ${this.model} is towing a ${vehicle.make} ${vehicle.model}.`);
    } else {
      console.log(`${vehicle.make} ${vehicle.model} is too heavy for ${this.make} ${this.model}.`);
    }
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`Truck: ${this.make} ${this.model}, VIN: ${this.vin}, Color: ${this.color}, Year: ${this.year}, Weight: ${this.weight} lbs, Top Speed: ${this.topSpeed} mph, Towing Capacity: ${this.towingCapacity} lbs`);
    this.wheels.forEach((wheel, i) =>
      console.log(`Wheel ${i + 1}: ${wheel.getDiameter} inch, ${wheel.getTireBrand}`)
    );
  }
}

export default Truck;
