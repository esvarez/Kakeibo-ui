import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private authService: AuthService
    ) { }

  canActivate() {
    return this.authService.isAuth()
  }

  canLoad() {
    return this.authService.isAuthLoad()
  }
}
