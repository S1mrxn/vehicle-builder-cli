# Vehicle Builder CLI

A command-line interface (CLI) application built with **TypeScript** and **Inquirer** that allows users to create, select, and interact with different types of vehicles (Car, Truck, Motorbike). Each vehicle type supports specific actions, such as towing for Trucks or wheelies for Motorbikes.

## Features

- **Vehicle Creation**: Create new Cars, Trucks, and Motorbikes with custom specifications.
- **Interactive Actions**: Start vehicles, accelerate, decelerate, turn, reverse, tow vehicles (Trucks only), and perform wheelies (Motorbikes only).
- **Data Validation**: Ensures correct data entry for vehicle specifications.
- **User-Friendly CLI**: Easy-to-follow prompts and menus guide users seamlessly through vehicle interactions.

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/S1mrxn/vehicle-builder-cli.git
```

### Step 2: Install Dependencies

```bash
cd vehicle-builder-cli
npm install
```

## Usage

Run the CLI application:

```bash
npm start
```

Follow the interactive prompts to create or select vehicles and perform various actions.

## Walkthrough Video

Watch the complete functionality of the Vehicle Builder CLI demonstrated here:

[[**Walkthrough Video**]](https://www.youtube.com/watch?v=Cb-P8WC6TTQ)

## Project Structure

```
vehicle-builder-cli/
├── src/
│   ├── classes/
│   │   ├── Car.ts
│   │   ├── Truck.ts
│   │   ├── Motorbike.ts
│   │   ├── Vehicle.ts
│   │   ├── Wheel.ts
│   │   └── Cli.ts
│   ├── interfaces/
│   │   ├── AbleToTow.ts
│   │   └── Driveable.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Built With

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en)
- [Inquirer.js](https://www.npmjs.com/package/inquirer)

## Author

- **Simranjot Singh** - [GitHub Profile](https://github.com/S1mrxn)

## License

This project is open source and available under the [MIT License](LICENSE).

