import { CPU } from "./cpu";
import { Instruction } from "./z80instructions";

class Z80CPU extends CPU {
  registers: { [key: string]: number };
  pc: number; // Program Counter
  sp: number; // Stack Pointer

  constructor(speed: number = 3.5, cores: number = 1) {
    super(speed, cores, 4);
    this.registers = {
      A: 0,
      B: 0,
      D: 0,
      H: 0,

      F: 0,
      C: 0,
      E: 0,
      L: 0,
    };
    this.pc = 0;
    this.sp = 0xffff;
  }

  executeInstruction(instruction: Instruction): void {
    // Simple simulation of instruction execution
    console.log(`[Z80] Executing: ${instruction}`);
    instruction.execute(this, instruction.operands);
  }

  getStatus(): string {
    return `[Z80] PC: ${this.registerString(this.pc)} SP: ${this.registerString(
      this.sp
    )}
      A: ${this.registerString(this.registers.A)} B: ${this.registerString(
      this.registers.B
    )} D: ${this.registerString(this.registers.D)} H: ${this.registerString(
      this.registers.D
    )}
      F: ${this.registerString(this.registers.F)} C: ${this.registerString(
      this.registers.C
    )} E: ${this.registerString(this.registers.E)} L: ${this.registerString(
      this.registers.L
    )}`;
  }
}

export { Z80CPU };
