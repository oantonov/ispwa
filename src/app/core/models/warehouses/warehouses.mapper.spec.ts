import { TestBed } from '@angular/core/testing';

import { WarehousesData } from './warehouses.interface';
import { WarehousesMapper } from './warehouses.mapper';

describe('Warehouses Mapper', () => {
  let warehousesMapper: WarehousesMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    warehousesMapper = TestBed.inject(WarehousesMapper);
  });

  describe('fromData', () => {
    it('should throw when input is falsy', () => {
      expect(() => warehousesMapper.fromData(undefined)).toThrow();
    });

    it('should map incoming data to model data', () => {
      const data: WarehousesData = {
        incomingField: 'test',
        otherField: false,
      };
      const mapped = warehousesMapper.fromData(data);
      expect(mapped).toHaveProperty('id', 'test');
      expect(mapped).not.toHaveProperty('otherField');
    });
  });
});
