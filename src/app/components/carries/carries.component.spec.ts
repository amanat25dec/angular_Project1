import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriesComponent } from './carries.component';

describe('CarriesComponent', () => {
  let component: CarriesComponent;
  let fixture: ComponentFixture<CarriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
