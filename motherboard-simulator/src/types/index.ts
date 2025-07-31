export interface Instruction {
    opcode: string;
    operands: any[];
}

export interface RAMData {
    address: number;
    value: any;
}