export interface WarehousesData {
  incomingField: string;
  otherField: boolean;
}

export interface Warehouses {
  type: string;
  total: number;
  warehouses: ReadonlyArray<Warehouse>;
}

export interface Warehouse {
  country: string;
  city: string;
  code: number;
}
