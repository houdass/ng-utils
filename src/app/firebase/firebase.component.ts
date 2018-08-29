import {Component, OnInit} from '@angular/core';
import {FirebaseService} from './firebase.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss']
})
export class FirebaseComponent implements OnInit {

  employees$;
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {}

  signIn() {
    this.firebaseService.signIn('test@test.com', '123456')
      .then(() => console.log('SUCCESS'))
      .catch(() => console.log('ERROR OF LOGIN'));
  }

  signOut() {
    this.firebaseService.signOut();
  }

  get isAuthenticated(): boolean {
    return this.firebaseService.isAuthenticated();
  }

  get currentUserEmail(): boolean {
    return this.firebaseService.currentUserEmail();
  }

  getEmployees() {
    this.employees$ = this.firebaseService.getEmployees();
  }

  addEmployee() {
    const employee = {
      'id': '5b867fc590b83acf9fbb6492',
      'isActive': false,
      'picture': 'http://placehold.it/32x32',
      'age': 27,
      'eyeColor': 'green',
      'name': 'Mcgee Holloway',
      'gender': 'male',
      'company': 'MEDIFAX',
      'email': 'mcgeeholloway@medifax.com',
      'phone': '+1 (817) 431-3428',
      'address': '200 Vermont Street, Eastvale, Northern Mariana Islands, 9359'
    };
    this.firebaseService.addEmployee(employee);
  }
}
