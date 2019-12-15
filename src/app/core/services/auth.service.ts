import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import { SetUserAction } from 'src/app/modules/user/user.actions';
import { take } from 'rxjs/operators';
import { State } from 'src/app/reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserAuth: boolean
  constructor(private router: Router,
              private store: Store<State>) { }

  login() {
    const newUser = new User({id:1, user: 'UserTest'})
    this.store.dispatch(new SetUserAction(newUser))
    this.isUserAuth = true
    this.router.navigate(['/'])
  }

  logout() {
    this.isUserAuth = false    
  }

  isAuth(): boolean {           
    let userAuth
    this.store.select('userState')
    .pipe( take(1) )
    .subscribe(state => {       
      userAuth = state.user
    })    
    if (userAuth != null) {
      this.isUserAuth = true
    } else {
      this.isUserAuth = false
    }
    if (this.isUserAuth == false) {
      this.router.navigate(['/login'])
    }     
    
    return this.isUserAuth
  }

  isAuthLoad(){
    let userAuth
    this.store.select('userState')
      .pipe( take(1) )
      .subscribe(state => userAuth = state.user)      
    if (userAuth != null) {      
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }
}
