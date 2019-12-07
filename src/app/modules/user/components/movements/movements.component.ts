import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/shared/models';

@Component({
  selector: 'kui-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {

  movements: Movement[] = [    
    { id: 1, amount: 250, categoryName: 'Comida', category: 'fastfood', categoryType: 'Expense', description: 'Almuerzo', date: '2019-03-15' },
    { id: 2, amount: 150, categoryName: 'Bebida', category: 'local_drink', categoryType: 'Expense', description: 'Sabadrink', date: '2019-03-17' },
    { id: 3, amount: 750, categoryName: 'Transporte', category: 'train', categoryType: 'Expense', date: '2019-03-15' },
    { id: 1, amount: 1250, categoryName: 'Comida', category: 'fastfood', categoryType: 'Expense', date: '2019-03-15' },
  ]

  constructor() { }

  ngOnInit() {
  }  

}
