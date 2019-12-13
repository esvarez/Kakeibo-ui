import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMovementsComponent } from './register-movements.component';

describe('RegisterMovementsComponent', () => {
  let component: RegisterMovementsComponent;
  let fixture: ComponentFixture<RegisterMovementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMovementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
