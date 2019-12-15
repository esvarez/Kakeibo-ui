import { environment } from 'src/environments/environment'
import { Injectable } from '@angular/core'

@Injectable({
   providedIn: 'root'
 })
export class UrlConfig {
   host: String
   users: String = '/users'
   accounts: String = '/accounts'
   movements: String = '/movements'
   categories: String = '/categories'
   constructor() {
      if (environment.production) {
         this.host = 'urlProd'   
      } else {
         this.host = 'http://localhost:8080/api'   
      }
   }
}