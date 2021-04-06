import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Warehouse } from 'ish-core/models/warehouses/warehouses.interface';

@Component({
  selector: 'ish-warehouses',
  templateUrl: './warehouses.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WarehousesComponent {
  @Input() warehouses: Array<Warehouse>;

  ngOnInit() {
    console.log('1# warehouses-items', this.warehouses);
  }
}
