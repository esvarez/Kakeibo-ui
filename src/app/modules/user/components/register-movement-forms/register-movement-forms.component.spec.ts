import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMovementFormsComponent } from './register-movement-forms.component';

describe('RegisterMovementFormsComponent', () => {
  let component: RegisterMovementFormsComponent;
  let fixture: ComponentFixture<RegisterMovementFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMovementFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMovementFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
