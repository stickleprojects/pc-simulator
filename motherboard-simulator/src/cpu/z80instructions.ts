import { RAM } from "../ram/ram";
import { Instruction } from "./cpu";
import { Z80CPU } from "./z80";

class MovLiteral extends Instruction {
  constructor(operands: any[] = []) {
    super("MOV", operands);
  }

  execute(cpu: Z80CPU, operands: number[]): void {
    const [value, register] = operands;

    cpu.registers[register] = value;
    console.log(`[MOV] Loaded literal ${value} into ${register}`);
    cpu.pc += 1; // Increment program counter after execution
  }
}

// This class is used to move data from RAM to a register
class MovRam extends Instruction {
  ram: RAM;
  constructor(ram: RAM, operands: any[] = []) {
    super("MOV", operands);
    this.ram = ram;
  }

  execute(cpu: Z80CPU, operands: number[]): void {
    const [value, register] = operands;

    cpu.registers[register] = value;
    console.log(`[MOV] Loaded literal ${value} into ${register}`);
    cpu.pc += 1; // Increment program counter after execution
  }
}

export { Instruction, MovLiteral };
