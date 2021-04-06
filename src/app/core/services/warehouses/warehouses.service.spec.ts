import { TestBed } from '@angular/core/testing';
import { instance, mock } from 'ts-mockito';

import { ApiService } from 'ish-core/services/api/api.service';

import { WarehouseListService } from './warehouses.service';

describe('Warehouses Service', () => {
  let apiServiceMock: ApiService;
  let warehousesService: WarehouseListService;

  beforeEach(() => {
    apiServiceMock = mock(ApiService);
    TestBed.configureTestingModule({
      providers: [{ provide: ApiService, useFactory: () => instance(apiServiceMock) }],
    });
    warehousesService = TestBed.inject(WarehouseListService);
  });

  it('should be created', () => {
    expect(warehousesService).toBeTruthy();
  });
});
