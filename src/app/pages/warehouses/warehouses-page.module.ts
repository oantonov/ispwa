import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'ish-shared/shared.module';

import { WarehousesPageComponent } from './warehouses-page.component';
import { WarehousesComponent } from './warehouses/warehouses.component';

const warehousesPageRoutes: Routes = [{ path: '', component: WarehousesPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(warehousesPageRoutes), SharedModule],
  declarations: [WarehousesComponent, WarehousesPageComponent],
})
export class WarehousesPageModule {}
