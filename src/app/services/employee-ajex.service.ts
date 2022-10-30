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
  addEmpData(payload: any) {
    return this.httpClient.post('http://localhost:3000/employees', payload);
  }

  deleteEmpData(id:any){
    return this.httpClient.delete(`http://localhost:3000/employees/${id}`)
  }
}
