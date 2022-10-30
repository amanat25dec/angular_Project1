import { Component, OnInit } from '@angular/core';
import { EmployeeAjexService } from 'src/app/services/employee-ajex.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-ajex',
  templateUrl: './employee-ajex.component.html',
  styleUrls: ['./employee-ajex.component.css'],
})
export class EmployeeAjexComponent implements OnInit {
  employees: any;
  constructor(private employeeAjexService: EmployeeAjexService) {}

  ngOnInit(): void {}
  getAllEmp() {
    this.employeeAjexService.getAllEmp().subscribe((res) => {
      this.employees = res;
    });
  }

  addEmp(fname: any, lname: any, email: any) {
    const empObj = {
      first_name: fname.value,
      last_name: lname.value,
      email: email.value,
    };

    this.employeeAjexService.addEmpData(empObj).subscribe((res) => {
      console.log('employee added successfully');
      Swal.fire('Good job!', 'Employee Added Successfully!', 'success');
      this.getAllEmp();
    });
  }

  deleteEmp(id: any) {
    this.employeeAjexService.deleteEmpData(id).subscribe((res) => {
      console.log('employes Deleted Successfully');

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.getAllEmp();
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      });
    });
  }
}
