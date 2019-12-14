import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'kui-movement-buttons',
  templateUrl: './movement-buttons.component.html',
  styleUrls: ['./movement-buttons.component.scss']
})
export class MovementButtonsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(type): void {
    const dialogRef = this.dialog.open(DialogRegisterMovementsTabs, {

    })
  }

}

@Component({
  selector: 'dialog-register-movements-tabs',
  templateUrl: 'dialog-register-movements-tabs.html'
})
export class DialogRegisterMovementsTabs {
  constructor(public dialogRef: MatDialogRef<DialogRegisterMovementsTabs>) {}

  onCloseClick(): void {
    this.dialogRef.close()
  }

}
