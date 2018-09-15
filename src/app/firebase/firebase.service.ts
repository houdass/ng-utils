import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable()
export class FirebaseService {
  authState: any = null;

  constructor(private afDb: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth: any) => {
      this.authState = auth;
    });
  }

  signIn(email: string, password: string): any {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then((credential: any) => {
      console.log(credential.user);
    });
  }

  signOut(): any {
    this.afAuth.auth.signOut();
  }

  addEmployee(employee: Employee): any {
    return this.afDb.list('/employees').push(employee);
  }

  removeEmployee(key: string): any {
    return this.afDb.list('/employees').remove(key);
  }

  updateEmployee(employee: Employee): any {
    return this.afDb.list('/employees').update(employee.key, employee);
  }

  getEmployeesV2(): Observable<any> {
    return this.afDb.list('/employees').snapshotChanges();
  }

  isAuthenticated(): boolean {
    return this.authState !== null;
  }

  currentUser(): any {
    return this.isAuthenticated ? this.authState : null;
  }

  currentUserEmail(): any {
    return this.isAuthenticated ? this.authState.email : null;
  }
}
