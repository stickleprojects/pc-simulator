class CPU {
  speed: number;
  cores: number;
  registerBits: number;
  constructor(speed: number, cores: number, registerBits: number = 1) {
    this.speed = speed;
    this.cores = cores;
    this.registerBits = registerBits;
  }

  executeInstruction(instruction: Instruction): void {
    console.log(`Executing instruction: ${instruction}`);
  }

  registerString(value: number): string {
    return `${value.toString(16).padStart(this.registerBits, "0")}`;
  }
  getStatus(): string {
    return `CPU Speed: ${this.speed} GHz, Cores: ${this.cores}`;
  }
}

class Instruction {
  opcode: string;
  operands: any[];

  constructor(opcode: string, operands: any[] = []) {
    this.opcode = opcode;
    this.operands = operands;
  }
  execute(cpu: CPU, operands: number[]): void {
    throw new Error("Method 'execute' must be implemented.");
  }
  toString(): string {
    return `${this.opcode} ${this.operands.join(", ")}`;
  }
}

export { CPU, Instruction };
