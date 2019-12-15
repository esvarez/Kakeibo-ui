import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MovementFormDialogComponent } from '../movement-form-dialog/movement-form-dialog.component';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { SetMovementTypeAction } from '../../user.actions';
import { MovementType } from 'src/app/shared/enums/movement-type';

@Component({
  selector: 'kui-movement-buttons',
  templateUrl: './movement-buttons.component.html',
  styleUrls: ['./movement-buttons.component.scss']
})
export class MovementButtonsComponent implements OnInit {

  private INCOME: MovementType = MovementType.INCOME
  private EXPENSE: MovementType = MovementType.EXPENSE
  private TRANSFER: MovementType = MovementType.TRANSFER

  constructor(public dialog: MatDialog,
              private store: Store<State>) { }

  ngOnInit() {
  }

  openDialog(movementType: MovementType){
    this.store.dispatch(new SetMovementTypeAction(movementType))

    //const dialogRef = 
    this.dialog.open(MovementFormDialogComponent, {
      maxWidth: '100vw'
    })
  }

}