import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/shared/models';
import { Subscription } from 'rxjs';
import { UserModuleState } from '../../store/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'kui-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.scss']
})
export class IndexUserComponent implements OnInit {

  private title = 'Ultimos movimientos'
  private movements: Movement[] = [
    { id: 5, amount: 750.5, category: {id: 1, name: "Renta", category: "Expense", imageURL: '360'},
    description: "Renta", date: "2019-03-12T23:00:20"}
  ]
  private movementsSubsciber: Subscription 

  constructor(private store: Store<UserModuleState>) { }

  ngOnInit() {
    this.movementsSubsciber = this.store.select('movementState')
        .subscribe(state => this.movements = state.lastMovemets )
  }

}
