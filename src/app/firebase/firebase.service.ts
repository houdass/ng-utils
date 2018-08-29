import {AngularFireDatabase} from 'angularfire2/database';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class FirebaseService {

  authState: any = null;

  constructor(private afDb: AngularFireDatabase, private afa: AngularFireAuth) {
    this.afa.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  signIn(email, password) {
    return this.afa.auth.signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(credential => {
        console.log(credential.user);
      });
  }

  signUp(email: string, password: string) {
    return this.afa.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
      })
      .catch(error => console.log(error));
  }

  signOut() {
    this.afa.auth.signOut();
  }

  addEmployee(employee) {
    return this.afDb.list('/employees').push(employee);
  }

  getEmployees(): any {
    return this.afDb.list('/employees').valueChanges();
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
