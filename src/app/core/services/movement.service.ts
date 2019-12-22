import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movement } from 'src/app/shared/models';
import { Observable } from 'rxjs';
import { UrlConfig } from 'src/app/configs/UrlConfing';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  private headers: HttpHeaders

  constructor(private httpClient: HttpClient,
              private url: UrlConfig) {
    url = new UrlConfig()
    this.headers = new HttpHeaders({
      'Content-Type':  'application/json'
    })    
  }

  public getMovementsFromAccountId(accountId: Number): Observable<Movement[]> {
    return this.httpClient.get<Movement[]>(`${this.url.host}${this.url.accounts}/${accountId}${this.url.movements}`)
  }

  public postMovement(accountId: Number, movement: any) {
    const body = JSON.stringify(movement)
    
    return this.httpClient.post(`${this.url.host}${this.url.accounts}/${accountId}${this.url.movements}`, body, { headers: this.headers})
  }

  private transformData(movements) {

     

    console.log(movements)
     let x = [
      ... movements.map(movement => {
         return { ... movement }
      })
   ] 
     console.log(x)
     return x
  }

}
