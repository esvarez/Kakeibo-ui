import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementButtonsComponent } from './movement-buttons.component';

describe('MovementButtonsComponent', () => {
  let component: MovementButtonsComponent;
  let fixture: ComponentFixture<MovementButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
