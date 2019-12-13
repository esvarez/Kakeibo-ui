import { Component, OnInit } from '@angular/core';
import { Account, Category } from 'src/app/shared/models';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'kui-income-form',
  templateUrl: './income-form.component.html',
  styleUrls: ['./income-form.component.scss']
})
export class IncomeFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  accounts: Account[] = [
    {id: 1, name: 'Cuenta 1', amount: 250},
    {id: 2, name: 'Cuenta 2', amount: 250},
    {id: 3, name: 'Cuenta 3', amount: 250},
  ]

  categories: Category[] = [
    {id: 1, name: 'Sueldo', imageUrl: 'url', category: 'income'},
    {id: 2, name: 'Ventas', imageUrl: 'url', category: 'income'}
  ]

  movementForm = new FormGroup({
    account: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required)
  })

  get account() { return this.movementForm.get('account') }
  get category() { return this.movementForm.get('category') }
  get amount() { return this.movementForm.get('amount') }
  get description() { return this.movementForm.get('description') }
  get date() { return this.movementForm.get('date') }
  get time() { return this.movementForm.get('time') }

  

  sendForm() {
    if (this.movementForm.valid){
      console.log('Send')
    }
    console.log(this.movementForm.value)
  }

}
