import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeId: number = 0;
  employeeList: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.searchEmployee();
  }

  searchEmployee() {
    if (this.employeeId) {
      this.employeeService.getEmployeeById(this.employeeId).subscribe(
        (data: Employee) => {
          this.employeeList = [data];
        }
      );
    } else {
      this.employeeService.getAllEmployees().subscribe(
        (data: Employee[]) => {
          this.employeeList = data;
        }
      );
    }
  }

  calculateAnnualSalary(salary: number): number {
    return salary * 12;
  }
}
