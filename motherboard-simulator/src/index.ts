import CPU from "./cpu/cpu";
import { Z80CPU } from "./cpu/z80";
import { RAM } from "./ram/ram";

const cpu = new Z80CPU(3.5, 4); // 3.5 GHz, 4 cores
const ram = new RAM(16); // 16 GB

function startSimulation() {
  console.log("Starting simulation...");

  const instruction = "LOAD A, 5";
  cpu.executeInstruction(instruction);

  ram.loadData([1, 2, 3, 4, 5]);

  console.log(cpu.getStatus());
  console.log("Data in RAM:", ram.getData());
}

startSimulation();
