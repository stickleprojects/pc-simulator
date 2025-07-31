export interface RAMData {
  address: number;
  value: any;
}

export interface Symbol {}
export interface Literal extends Symbol {
  value: number | string;
}
export interface Register extends Symbol {
  name: string;
}
export interface Address extends Symbol {
  address: number;
}
