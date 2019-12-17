import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { UnsetUserAction } from 'src/app/modules/auth/auth.actions';

@Component({
  selector: 'kui-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {

  constructor(private store: Store<State>) { }

  onCloseSesion() {
    this.store.dispatch(new UnsetUserAction())
  }

}
