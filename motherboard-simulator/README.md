# Motherboard Simulator

This project simulates a basic motherboard architecture, including a CPU and RAM. The simulator allows for the execution of instructions and the management of data in RAM.

## Project Structure

```
motherboard-simulator
├── src
│   ├── index.ts          # Entry point of the simulator
│   ├── cpu
│   │   └── cpu.ts       # CPU class definition
│   ├── ram
│   │   └── ram.ts       # RAM class definition
│   └── types
│       └── index.ts     # Type definitions for instructions and RAM data
├── package.json          # NPM configuration file
├── tsconfig.json         # TypeScript configuration file
└── README.md             # Project documentation
```

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Usage

To start the simulator, run:

```
npm start
```

This will execute the code in `src/index.ts`, initializing the CPU and RAM, and starting the simulation process.

## Classes and Interfaces

### CPU

- **Properties:**
  - `speed`: number - The speed of the CPU.
  - `cores`: number - The number of cores in the CPU.

- **Methods:**
  - `executeInstruction(instruction: string): void` - Executes a given instruction.
  - `getStatus(): string` - Returns the current status of the CPU.

### RAM

- **Properties:**
  - `size`: number - The size of the RAM.
  - `data`: any[] - The data stored in RAM.

- **Methods:**
  - `loadData(data: any[]): void` - Loads data into RAM.
  - `getData(): any[]` - Retrieves the stored data.

### Types

- **Instruction**: Defines the structure of an instruction object.
- **RAMData**: Defines the structure of data stored in RAM.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.