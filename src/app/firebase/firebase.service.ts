import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Employee } from './employee.model';
import { map } from 'rxjs/operators';

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

  getEmployees(): any {
    return this.afDb
      .list('/employees')
      .snapshotChanges()
      .pipe(map((changes: any) => changes.map((c: any) => ({ key: c.payload.key, ...c.payload.val() }))));
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
