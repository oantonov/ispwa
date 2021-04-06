import { createSelector } from '@ngrx/store';

import { Warehouse } from 'ish-core/models/warehouses/warehouses.interface';

import { WarehouseState } from './warehouse.state';

export const selectWarehouses = createSelector(
  (state: WarehouseState) => state.warehouses,
  (warehouses: Array<Warehouse>) => warehouses
);

export const selectWarehouseList = createSelector(selectWarehouses, (warehouses: Array<Warehouse>) =>
  warehouses.map(warehouses => warehouses)
);
