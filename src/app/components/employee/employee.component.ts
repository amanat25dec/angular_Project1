import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}
  employees: any[] = [];
  ngOnInit(): void {
    this.getAllEmp();
  }
  getAllEmp() {
    this.employees = this.employeeService.getAllEmpdata();
  }
  getMaleEmp() {
    this.employees = this.employeeService.getMaleEmpdata();
  }
  getFemaleEmp() {
    this.employees = this.employeeService.getFemaleEmpdata();
  }


}
