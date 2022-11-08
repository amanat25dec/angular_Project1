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

      var form: any = document.getElementById('myform');
      form.reset();

      this.getAllEmp();
    });
  }

  deleteEmp(id: any) {
   
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

        this.employeeAjexService.deleteEmpData(id).subscribe((res) => {
          console.log('employes Deleted Successfully');
          this.getAllEmp();
        });

        

        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  selectEmployee: any;
  updatedEmp:any
  displayStyle = 'none';

  openPopup(emp: any) {
    this.selectEmployee = emp;
    // console.log(emp)
    this.displayStyle = 'block';
  }

  saveChanges(data:any) {
   
    this.employeeAjexService.updateEmpData(data).subscribe((res) => {
      console.log(res);
      this.getAllEmp();
    });
    // this.displayStyle = 'none';
  }

  closePopup() {
    this.displayStyle = 'none';
  }
}
