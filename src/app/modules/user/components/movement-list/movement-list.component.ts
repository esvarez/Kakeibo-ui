import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movement } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import { UserModuleState } from '../../store/reducers';

@Component({
  selector: 'kui-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.scss']
})
export class MovementListComponent implements OnInit, OnDestroy { 

  @Input() title: String
  @Input() movements: Movement[] 
  private accountId: Number
  private accountSubscriber: Subscription   
  
  constructor(private store: Store<UserModuleState>) { }

  ngOnInit() {
    this.accountSubscriber = this.store.select('accountsState')    
      .subscribe(state => this.accountId = state.accountSelected && state.accountSelected.id || null,
      err => console.log('EE:', err) )    
  }  

  ngOnDestroy(): void {
    this.accountSubscriber.unsubscribe()
  }

}


