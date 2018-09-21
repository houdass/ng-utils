import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html'
})
export class FirebaseComponent implements OnInit {
  isEdit: boolean = false;
  name: string = '';
  selectedEmployee: Employee;
  employees$: Observable<any>;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  signIn(): void {
    this.firebaseService.signIn('test@test.com', '123456');
  }

  signOut(): void {
    this.firebaseService.signOut();
  }

  get isAuthenticated(): boolean {
    return this.firebaseService.isAuthenticated();
  }

  get currentUserEmail(): boolean {
    return this.firebaseService.currentUserEmail();
  }

  getEmployees(): void {
    this.employees$ = this.firebaseService.getEmployees();
  }

  addEmployee(name: string): void {
    const employee: Employee = { name };
    this.firebaseService.addEmployee(employee);
    this.name = '';
  }

  removeEmployee(key: string): void {
    this.firebaseService.removeEmployee(key);
  }

  updateEmployee(employee: any): void {
    this.isEdit = true;
    this.selectedEmployee = employee;
    this.name = employee.name;
  }

  confirmUpdateEmployee(): void {
    this.selectedEmployee.name = this.name;
    this.firebaseService.updateEmployee(this.selectedEmployee);
    this.selectedEmployee = null;
    this.isEdit = false;
    this.name = '';
  }

  cancel(): void {
    this.isEdit = false;
    this.name = '';
  }
}
