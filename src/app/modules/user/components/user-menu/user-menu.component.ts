import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { UnsetUserAction } from 'src/app/modules/auth/auth.actions';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'kui-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {

  constructor(private store: Store<State>, private authService: AuthService) { }

  onCloseSesion() {
    this.store.dispatch(new UnsetUserAction())
  }

  login() {    
    console.log('Algo...')
    this.authService.login()        
  }


}
