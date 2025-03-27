import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  vin: string; color: string; make: string; model: string;
  year: number; weight: number; topSpeed: number; wheels: Wheel[];

  constructor(
    vin: string, color: string, make: string, model: string,
    year: number, weight: number, topSpeed: number, wheels: Wheel[] = []
  ) {
    super();
    this.vin = vin; this.color = color; this.make = make; this.model = model;
    this.year = year; this.weight = weight; this.topSpeed = topSpeed;
    this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()];
  }

  wheelie(): void {
    console.log(`${this.make} ${this.model} is doing a wheelie!`);
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`Motorbike: ${this.make} ${this.model}, VIN: ${this.vin}, Color: ${this.color}, Year: ${this.year}, Weight: ${this.weight} lbs, Top Speed: ${this.topSpeed} mph`);
    this.wheels.forEach((wheel, i) =>
      console.log(`Wheel ${i + 1}: ${wheel.getDiameter} inch, ${wheel.getTireBrand}`)
    );
  }
}

export default Motorbike;
