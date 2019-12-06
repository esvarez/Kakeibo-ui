import { Component } from '@angular/core';
import { Account } from 'src/app/shared/models/Account'

@Component({
  selector: 'kui-select-account',
  templateUrl: './select-account.component.html',
  styleUrls: ['./select-account.component.scss']
})
export class SelectAccountComponent {

  constructor() { }

  accounts: Account[] = [
    { id: 1, name: "Cuenta de debito", amount: 2500, description: "Descripcion" },    
    { id: 2, name: 'Cuenta credito', amount: 3000 },
    { id: 3, name: 'Efectivo', amount: 2000 },
  ]

}
