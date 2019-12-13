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

}
