export class RAM {
    size: number;
    data: any[];

    constructor(size: number) {
        this.size = size;
        this.data = [];
    }

    loadData(data: any[]): void {
        if (data.length > this.size) {
            throw new Error("Data exceeds RAM size");
        }
        this.data = data;
    }

    getData(): any[] {
        return this.data;
    }
}