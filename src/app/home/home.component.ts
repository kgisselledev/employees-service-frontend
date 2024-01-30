import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
   employeeId: number = 0;
   employee: Employee | undefined;

   constructor(private employeeService: EmployeeService) { }

  searchEmployee() {
    if (this.employeeId) {
      this.employeeService.getEmployeeById(this.employeeId).subscribe(
        (data: Employee) => {
          this.employee = data;
        },
        (error) => {
          console.error('Error fetching employee by ID:', error);
        }
      );
    }
  }

  calculateAnnualSalary(salary: number): number {
       return salary * 12;
  }
}
