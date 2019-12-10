import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/modules/user/user.reducer';
import { SetUserAction } from 'src/app/modules/user/user.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserAuth: boolean
  constructor(private router: Router,
              private store: Store<UserState>) { 
                console.log('Constructor ' + this.isUserAuth)
              }

  login() {
    console.log('login')
    const newUser = new User({id:1, user: 'UserTest'})
    this.store.dispatch(new SetUserAction(newUser))
    this.isUserAuth = true
    this.router.navigate(['/'])
  }

  logout() {
    console.log('loguut')
    this.isUserAuth = false    
  }

  isAuth(): boolean {   
    if (this.isUserAuth == null) {
      this.router.navigate(['/login'])
    }
    console.log(this.isUserAuth) 
    return this.isUserAuth
  }
}
