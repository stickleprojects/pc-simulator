import { Z80CPU } from "./cpu/z80";
import { MovLiteral } from "./cpu/z80instructions";
import { RAM } from "./ram/ram";

const cpu = new Z80CPU(3.5, 4); // 3.5 GHz, 4 cores
const ram = new RAM(16); // 16 GB

function startSimulation() {
  console.log("Starting simulation...");

  cpu.executeInstruction(new MovLiteral([5, "A"]));
  cpu.executeInstruction(new MovLiteral([10, "B"]));
  cpu.executeInstruction(new MovLiteral([20, "C"]));
  cpu.executeInstruction(new MovLiteral([30, "D"]));

  ram.loadData([1, 2, 3, 4, 5]);

  console.log(cpu.getStatus());
  console.log("Data in RAM:", ram.getData());
}

startSimulation();
