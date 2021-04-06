import { WarehousesHelper } from './warehouses.helper';
import { Warehouses } from './warehouses.model';

describe('Warehouses Helper', () => {
  describe('equal', () => {
    it.each([
      [false, undefined, undefined],
      [false, { id: 'test' } as Warehouses, undefined],
      [false, undefined, { id: 'test' } as Warehouses],
      [false, { id: 'test' } as Warehouses, { id: 'other' } as Warehouses],
      [true, { id: 'test' } as Warehouses, { id: 'test' } as Warehouses],
    ])(`should return %s when comparing %j and %j`, (expected, o1, o2) => {
      expect(WarehousesHelper.equal(o1, o2)).toEqual(expected);
    });
  });
});
