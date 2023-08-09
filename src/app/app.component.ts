import { Component } from '@angular/core';
import { Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee[] = [
    {id: 1, name: "Lewis", country: "USA" }, 
    {id: 2, name: "Aguilar", country: "Colombia" }, 
    {id: 3, name: "Contreras", country: "venezuela"}, 
  ];

  selectedEmployee: Employee = new Employee();

  openForedit(employee: Employee){
     this.selectedEmployee=employee;       

  }

  addOrEdit() {
    if(this.selectedEmployee.id ==0){ 
     this.selectedEmployee.id=this.employeeArray.length + 1;
     this.employeeArray.push(this.selectedEmployee);
    }
     this.selectedEmployee = new Employee();

  }

  delete() {
    if(confirm('Are you sure want to delete it')){
  this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee );
  this.selectedEmployee = new Employee();
    }
  }

}
