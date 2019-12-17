import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/shared/models';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { MovementService } from 'src/app/core/services/movement.service';
import { UserModuleState } from '../../store/reducers';


@Component({
  selector: 'kui-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {

  
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
          //.subscribe(res => console.log(res))
      },
      err => console.log('EE:', err) )    
  }  

}
