class CPU {
    speed: number;
    cores: number;

    constructor(speed: number, cores: number) {
        this.speed = speed;
        this.cores = cores;
    }

    executeInstruction(instruction: string): void {
        console.log(`Executing instruction: ${instruction}`);
    }

    getStatus(): string {
        return `CPU Speed: ${this.speed} GHz, Cores: ${this.cores}`;
    }
}

export default CPU;