import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movement } from 'src/app/shared/models';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { MovementService } from 'src/app/core/services/movement.service';
import { UserModuleState } from '../../store/reducers';

@Component({
  selector: 'kui-last-movements',
  templateUrl: './last-movements.component.html',
  styleUrls: ['./last-movements.component.scss']
})
export class LastMovementsComponent implements OnInit, OnDestroy {
  
  private accountId: Number
  private movements: Movement[] 
  private accountSubscriber: Subscription
  private movementsSubsciber2: Subscription  
  private movementsSubsciber: Subscription  

  constructor(private store: Store<UserModuleState>,
              private movementService: MovementService) { }

  ngOnInit() {
    this.accountSubscriber = this.store.select('accountsState')    
      .subscribe(state => { 
        this.accountId = state.accountSelected && state.accountSelected.id || null
        this.movementsSubsciber2 = this.movementService
          .getMovementsFromAccountId(this.accountId)
          .subscribe(res => this.movements = res)          
      },
      err => console.log('EE:', err) )    
  }  

  ngOnDestroy(): void {
    this.accountSubscriber.unsubscribe();
  }
}
