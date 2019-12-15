import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementFormDialogComponent } from './movement-form-dialog.component';

describe('MovementFormDialogComponent', () => {
  let component: MovementFormDialogComponent;
  let fixture: ComponentFixture<MovementFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
