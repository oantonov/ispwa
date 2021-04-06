import { Warehouse } from 'ish-core/models/warehouses/warehouses.interface';

export interface WarehouseState {
  warehouses: ReadonlyArray<Warehouse>;
}
