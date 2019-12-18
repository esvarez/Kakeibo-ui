import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMovementsComponent } from './filter-movements.component';

describe('FilterMovementsComponent', () => {
  let component: FilterMovementsComponent;
  let fixture: ComponentFixture<FilterMovementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterMovementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
