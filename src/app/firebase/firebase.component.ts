import { Component } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss']
})
export class FirebaseComponent {
  employees$: Observable<any>;

  constructor(private firebaseService: FirebaseService) {}

  signIn(): void {
    this.firebaseService
      .signIn('test@test.com', '123456')
      .then(() => console.log('SUCCESS'))
      .catch(() => console.log('ERROR OF LOGIN'));
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
    // this.employees$ = this.firebaseService.getEmployees();

    this.employees$ = this.firebaseService
      .getEmployeesV2()
      .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))));
  }

  addEmployee(): void {
    const employee: any = {
      id: '5b867fc590b83acf9fbb6492',
      isActive: false,
      picture: 'http://placehold.it/32x32',
      age: 27,
      eyeColor: 'green',
      name: 'Mcgee Holloway',
      gender: 'male',
      company: 'MEDIFAX',
      email: 'mcgeeholloway@medifax.com',
      phone: '+1 (817) 431-3428',
      address: '200 Vermont Street, Eastvale, Northern Mariana Islands, 9359'
    };
    this.firebaseService.addEmployee(employee);
  }

  removeEmployee(key: string): void {
    this.firebaseService.removeEmployee(key);
  }

  updateEmployee(employee: any): void {
    this.firebaseService.updateEmployee(employee);
  }
}