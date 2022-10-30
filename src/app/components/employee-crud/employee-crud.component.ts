import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css'],
})
export class EmployeeCrudComponent implements OnInit {
  employees = [
    { eId: 101, name: 'sanjay', sal: 5000 },
    { eId: 104, name: 'deepak', sal: 8000 },
    { eId: 103, name: 'ranjan', sal: 7000 },
    { eId: 102, name: 'manoj', sal: 9000 },
  ];

  selectEmployee: any;
  displayStyle = 'none';

  constructor() {}

  ngOnInit(): void {}

  deleteEmp(id: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it! ',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const objWithIdIndex = this.employees.findIndex(
            (obj: any) => obj.id === id
          );
          this.employees.splice(objWithIdIndex, 1);

          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Employee has been deleted.',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Employee is safe :)',
            'error'
          );
        }
      });
  }
  editEmp(id: any) {}

  addEmp(id: any, name: any, salary: any) {
    this.employees.push({ eId: id, name: name, sal: salary });
    Swal.fire('Good job!', 'Employee Added Successfully!', 'success');
  }

  openPopup(emp: any) {
    this.selectEmployee = emp;
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
}
