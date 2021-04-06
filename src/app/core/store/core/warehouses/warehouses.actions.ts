import { createAction, props } from '@ngrx/store';

export const retrievedWarehouses = createAction(
  '[WarehouseAPI] Retrieve Warehouses Success',
  props<{ Warehouse: any }>()
);
