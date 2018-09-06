import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable()
export class FirebaseService {
  authState: any = null;

  constructor(private afDb: AngularFireDatabase, private afa: AngularFireAuth) {
    this.afa.authState.subscribe((auth: any) => {
      this.authState = auth;
    });
  }

  signIn(email: string, password: string): any {
    return this.afa.auth.signInWithEmailAndPassword(email, password).then((credential: any) => {
      console.log(credential.user);
    });
  }

  signUp(email: string, password: string): any {
    return this.afa.auth
      .createUserWithEmailAndPassword(email, password)
      .then((user: any) => {
        this.authState = user;
      })
      .catch((error: any) => console.log(error));
  }

  signOut(): any {
    this.afa.auth.signOut();
  }

  addEmployee(employee: any): any {
    return this.afDb.list('/employees').push(employee);
  }

  removeEmployee(key: string): any {
    return this.afDb.list('/employees').remove(key);
  }

  updateEmployee(employee: any): any {
    return this.afDb.list('/employees').update(employee.key, employee);
  }

  getEmployees(): Observable<any> {
    return this.afDb.list('/employees').valueChanges();
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
