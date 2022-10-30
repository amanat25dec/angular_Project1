import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAjexComponent } from './employee-ajex.component';

describe('EmployeeAjexComponent', () => {
  let component: EmployeeAjexComponent;
  let fixture: ComponentFixture<EmployeeAjexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAjexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAjexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
