import CPU from "./cpu";

class Z80CPU extends CPU {
  registers: { [key: string]: number };
  pc: number; // Program Counter
  sp: number; // Stack Pointer

  constructor(speed: number = 3.5, cores: number = 1) {
    super(speed, cores);
    this.registers = {
      A: 0,
      F: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
      H: 0,
      L: 0,
      IX: 0,
      IY: 0,
      I: 0,
      R: 0,
    };
    this.pc = 0;
    this.sp = 0xffff;
  }

  executeInstruction(instruction: string): void {
    // Simple simulation of instruction execution
    console.log(`[Z80] Executing: ${instruction}`);
    // Example: increment PC for each instruction
    this.pc += 1;
  }

  getStatus(): string {
    return `[Z80] PC: ${this.pc}, SP: ${this.sp}, Registers: ${JSON.stringify(
      this.registers
    )}`;
  }
}

export { Z80CPU };
