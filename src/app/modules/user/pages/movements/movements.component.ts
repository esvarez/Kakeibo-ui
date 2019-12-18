import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/shared/models';

@Component({
  selector: 'kui-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {

  private title: String = 'Movimientos'
  private movements: Movement[] = [
    { id: 5, amount: 750.5, category: {id: 1, name: "Renta", category: "Expense", imageURL: '360'},
    description: "Renta", date: "2019-03-12T23:00:20"}
  ]

  

  constructor() { }

  ngOnInit() {
  }

}
