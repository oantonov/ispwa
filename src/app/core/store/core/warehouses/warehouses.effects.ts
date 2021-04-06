import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { retrievedWarehouses } from './warehouses.actions';

@Injectable()
export class WarehousesEffects {
  constructor(private actions$: Actions) {}

  retrievedWarehouses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(retrievedWarehouses),
      concatMap(() => EMPTY as Observable<Action>)
    )
  );
}
