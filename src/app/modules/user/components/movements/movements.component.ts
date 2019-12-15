import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/shared/models';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { MovementService } from 'src/app/core/services/movement.service';
import * as fromUser from 'src/app/modules/user/user.reducer'

@Component({
  selector: 'kui-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {

  
  private accountId: Number
  private accountSubscriber: Subscription
  private movementsSubsciber: Subscription  

  movements: Movement[] = [    
    { id: 1, amount: 250, category:{name:'retiro', category:'expense', imageUrl:'fastfood' }, description: 'Almuerzo', date: '2019-03-15' },
    { id: 2, amount: 150, category:{name:'retiro', category:'expense', imageUrl:'local_drink' }, description: 'Sabadrink', date: '2019-03-17' },
    { id: 3, amount: 750, category:{name:'retiro', category:'expense', imageUrl:'train' }, date: '2019-03-15' },
    { id: 1, amount: 1250, category:{name:'retiro', category:'expense', imageUrl:'fastfood' }, date: '2019-03-15' },
  ]

  constructor(private store: Store<fromUser.State>,
              private movementService: MovementService) { }

  ngOnInit() {
    this.accountSubscriber = this.store.select('userState')    
      .subscribe(state => { 
        this.accountId = state.accountSelected && state.accountSelected.id || 0 
        this.movementsSubsciber = this.movementService
          .getMovementsFromAccountId(this.accountId)
          .subscribe(res => this.movements = res)
          //.subscribe(res => console.log(res))
      },
      err => console.log('EE:', err) )    
  }  

}
