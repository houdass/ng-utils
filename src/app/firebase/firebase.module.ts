import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
import { FirebaseComponent } from './firebase.component';
import {FirebaseService} from './firebase.service';
import {FirebaseRoutingModule} from './firebase-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FirebaseRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [FirebaseComponent],
  providers: [FirebaseService]
})
export class FirebaseModule { }
