import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MovementService } from 'src/app/core/services/movement.service';

import * as movementsActions from '../actions/movements.action'
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MovementsEffects {

   constructor (private actions$: Actions,
                private movementsService: MovementService) {}

   @Effect()
   LoadMovements$ = this.actions$
      .pipe(
         ofType(movementsActions.LOAD_MOVEMENTS),
         map(action => action['accountId']),
         switchMap(id => {            
            return this.movementsService.getMovementsFromAccountId(id)
            .pipe(
               map( movements => new movementsActions.LoadMovementsSuccessAction(movements)),
               catchError( error => of(new movementsActions.LoadMovementsFailAction(error)))
            )
         })
      )
}