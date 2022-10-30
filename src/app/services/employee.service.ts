import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, Gender: 'male' },
    { eId: 104, name: 'rani', sal: 8000, Gender: 'female' },
    { eId: 103, name: 'ranjan', sal: 7000, Gender: 'male' },
    { eId: 102, name: 'sweety', sal: 9000, Gender: 'female' },
    { eId: 105, name: 'amanat', sal: 9000, Gender: 'male' },
    { eId: 107, name: 'kiran', sal: 9000, Gender: 'female' },
    { eId: 106, name: 'rahul', sal: 9000, Gender: 'male' },
  ];

  getAllEmpdata() {
    return this.employees;
  }
  getMaleEmpdata() {
    return this.employees.filter((emp) => emp.Gender === 'male');
  }
  getFemaleEmpdata() {
    return this.employees.filter((emp) => emp.Gender === 'female');
  }
}
