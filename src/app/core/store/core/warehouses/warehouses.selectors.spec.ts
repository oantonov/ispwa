import { TestBed } from '@angular/core/testing';

import { CoreStoreModule } from 'ish-core/store/core/core-store.module';
import { StoreWithSnapshots, provideStoreSnapshots } from 'ish-core/utils/dev/ngrx-testing';

import { loadWarehouses } from './warehouses.actions';
import { getWarehousesLoading } from './warehouses.selectors';

describe('Warehouses Selectors', () => {
  let store$: StoreWithSnapshots;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreStoreModule.forTesting(['warehouses'])],
      providers: [provideStoreSnapshots()],
    });

    store$ = TestBed.inject(StoreWithSnapshots);
  });

  describe('initial state', () => {
    it('should not be loading when in initial state', () => {
      expect(getWarehousesLoading(store$.state)).toBeFalse();
    });
  });

  describe('loadWarehouses', () => {
    const action = loadWarehouses();

    beforeEach(() => {
      store$.dispatch(action);
    });

    it('should set loading to true', () => {
      expect(getWarehousesLoading(store$.state)).toBeTrue();
    });
  });
});
