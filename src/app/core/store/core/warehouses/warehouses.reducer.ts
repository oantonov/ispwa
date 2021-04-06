import { createReducer, on } from '@ngrx/store';

import { retrievedWarehouses } from './warehouses.actions';

export interface WarehousesState {
  loading: boolean;
}

export const initialState: WarehousesState = {
  loading: false,
};

export const warehousesReducer = createReducer(
  initialState,
  on(retrievedWarehouses, (_state, { Warehouse }) => ({ loading: true, ...Warehouse }))
);
