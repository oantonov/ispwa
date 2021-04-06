import { Injectable } from '@angular/core';

import { WarehousesData } from './warehouses.interface';
import { Warehouses } from './warehouses.interface';

@Injectable({ providedIn: 'root' })
export class WarehousesMapper {
  fromData(warehousesData: WarehousesData): Warehouses {
    if (warehousesData) {
      return {
        warehousesData.incomingField,
      };
    } else {
      throw new Error(`warehousesData is required`);
    }
  }
}
