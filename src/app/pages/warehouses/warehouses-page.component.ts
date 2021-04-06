import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs/operators';

import { WarehouseListService } from 'ish-core/services/warehouses/warehouses.service';
import { retrievedWarehouses } from 'ish-core/store/core/warehouses/warehouses.actions';
import { selectWarehouseList } from 'ish-core/store/core/warehouses/warehouses.selectors';

@Component({
  selector: 'ish-warehouses-page',
  templateUrl: './warehouses-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WarehousesPageComponent {
  // warehouses$ = this.store.pipe(select(selectWarehouseList));
  warehouses$ = this.store.pipe(select(selectWarehouseList));

  constructor(private service: WarehouseListService, private store: Store) {}

  ngOnInit() {
    this.service
      .getWarehouses()
      .pipe(tap(data => console.log('1# warehouses', data)))
      .subscribe(Warehouse => this.store.dispatch(retrievedWarehouses({ Warehouse })));
  }
}
