import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Warehouses } from 'ish-core/models/warehouses/warehouses.interface';

@Injectable({ providedIn: 'root' })
export class WarehouseListService {
  constructor(private http: HttpClient) {}

  getWarehouses(): Observable<Array<Warehouses>> {
    return this.http
      .get<{ warehouses: Warehouses[] }>('/assets/mock-data/warehouses/warehouses.json')
      .pipe(map(data => data.warehouses || []));
  }
}
