// Cli.ts
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";

class Cli {
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  static generateVin(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  chooseVehicle(): void {
    inquirer.prompt([
      {
        type: 'list',
        name: 'selectedVehicleVin',
        message: 'Select a vehicle to perform an action on',
        choices: this.vehicles.map(vehicle => ({
          name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
          value: vehicle.vin
        }))
      }
    ]).then((answers) => {
      this.selectedVehicleVin = answers.selectedVehicleVin;
      this.performActions();
    });
  }

  createVehicle(): void {
    inquirer.prompt([
      {
        type: 'list',
        name: 'vehicleType',
        message: 'Select a vehicle type',
        choices: ['Car', 'Truck', 'Motorbike']
      }
    ]).then((answers) => {
      if (answers.vehicleType === 'Car') this.createCar();
      else if (answers.vehicleType === 'Truck') this.createTruck();
      else if (answers.vehicleType === 'Motorbike') this.createMotorbike();
    });
  }

  createCar(): void {
    inquirer.prompt([
      { type: 'input', name: 'color', message: 'Enter Color' },
      { type: 'input', name: 'make', message: 'Enter Make' },
      { type: 'input', name: 'model', message: 'Enter Model' },
      { type: 'number', name: 'year', message: 'Enter Year' },
      { type: 'number', name: 'weight', message: 'Enter Weight' },
      { type: 'number', name: 'topSpeed', message: 'Enter Top Speed' },
    ]).then((answers) => {
      const car = new Car(Cli.generateVin(), answers.color, answers.make, answers.model, answers.year, answers.weight, answers.topSpeed, []);
      this.vehicles.push(car);
      this.selectedVehicleVin = car.vin;
      this.performActions();
    });
  }

  createTruck(): void {
    inquirer.prompt([
      { type: 'input', name: 'color', message: 'Enter Color' },
      { type: 'input', name: 'make', message: 'Enter Make' },
      { type: 'input', name: 'model', message: 'Enter Model' },
      { type: 'number', name: 'year', message: 'Enter Year' },
      { type: 'number', name: 'weight', message: 'Enter Weight' },
      { type: 'number', name: 'topSpeed', message: 'Enter Top Speed' },
      { type: 'number', name: 'towingCapacity', message: 'Enter Towing Capacity' },
    ]).then((answers) => {
      const truck = new Truck(Cli.generateVin(), answers.color, answers.make, answers.model, answers.year, answers.weight, answers.topSpeed, answers.towingCapacity);
      this.vehicles.push(truck);
      this.selectedVehicleVin = truck.vin;
      this.performActions();
    });
  }

  createMotorbike(): void {
    inquirer.prompt([
      { type: 'input', name: 'color', message: 'Enter Color' },
      { type: 'input', name: 'make', message: 'Enter Make' },
      { type: 'input', name: 'model', message: 'Enter Model' },
      { type: 'number', name: 'year', message: 'Enter Year' },
      { type: 'number', name: 'weight', message: 'Enter Weight' },
      { type: 'number', name: 'topSpeed', message: 'Enter Top Speed' },
    ]).then((answers) => {
      const bike = new Motorbike(Cli.generateVin(), answers.color, answers.make, answers.model, answers.year, answers.weight, answers.topSpeed);
      this.vehicles.push(bike);
      this.selectedVehicleVin = bike.vin;
      this.performActions();
    });
  }

  performActions(): void {
    const selected = this.vehicles.find(v => v.vin === this.selectedVehicleVin);
    inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Select an action',
        choices: [
          'Print details', 'Start vehicle', 'Accelerate 5 MPH', 'Decelerate 5 MPH', 'Stop vehicle',
          'Turn right', 'Turn left', 'Reverse', 'Tow (Truck only)', 'Wheelie (Motorbike only)',
          'Select or create another vehicle', 'Exit'
        ]
      }
    ]).then((answers) => {
      switch (answers.action) {
        case 'Print details': selected?.printDetails(); break;
        case 'Start vehicle': selected?.start(); break;
        case 'Accelerate 5 MPH': selected?.accelerate(5); break;
        case 'Decelerate 5 MPH': selected?.decelerate(5); break;
        case 'Stop vehicle': selected?.stop(); break;
        case 'Turn right': selected?.turn('right'); break;
        case 'Turn left': selected?.turn('left'); break;
        case 'Reverse': selected?.reverse(); break;
        case 'Tow (Truck only)':
          if (selected instanceof Truck) console.log('Tow action here');
          else console.log('Not a truck'); break;
        case 'Wheelie (Motorbike only)':
          if (selected instanceof Motorbike) selected.wheelie();
          else console.log('Not a motorbike'); break;
        case 'Select or create another vehicle': this.startCli(); return;
        default: this.exit = true;
      }
      if (!this.exit) this.performActions();
    });
  }

  startCli(): void {
    inquirer.prompt([
      { type: 'list', name: 'CreateOrSelect', message: 'Choose an option', choices: ['Create a new vehicle', 'Select an existing vehicle'] }
    ]).then((answers) => {
      if (answers.CreateOrSelect === 'Create a new vehicle') this.createVehicle();
      else this.chooseVehicle();
    });
  }
}

export default Cli;
