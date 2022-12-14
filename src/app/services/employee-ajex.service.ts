import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeAjexService {
  constructor(private httpClient: HttpClient) {}
  getAllEmp() {
    return this.httpClient.get('http://localhost:3000/employees');
  }
  updateEmpData(data:any) {
    console.log(data)
    return this.httpClient.patch(`http://localhost:3000/employees/${data.id}`,data);

  }
  addEmpData(payload: any) {
    return this.httpClient.post('http://localhost:3000/employees', payload);
  }

  deleteEmpData(id:any){
    return this.httpClient.delete(`http://localhost:3000/employees/${id}`)
  }
}
