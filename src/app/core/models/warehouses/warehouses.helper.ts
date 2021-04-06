import { Warehouses } from './warehouses.model';

export class WarehousesHelper {
  static equal(warehouses1: Warehouses, warehouses2: Warehouses): boolean {
    return !!warehouses1 && !!warehouses2 && warehouses1.id === warehouses2.id;
  }
}
