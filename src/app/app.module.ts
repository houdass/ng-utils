import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ComponentsModule } from './components/components.module';
import { WildcardRoutingModule } from './wildcard-routing/wildcard-routing.module';
import { DirectivesModule } from './directives/directives.module';
import { FirebaseModule } from './firebase/firebase.module';
import { RoutingModule } from './routing/routing.module';
import { FormsModule } from './forms/forms.module';
import { NgstoreModule } from './ngstore/ngstore.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store/app.reducers';
import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    // DatabindingModule: Lazy loaded
    DirectivesModule,
    ComponentsModule,
    FirebaseModule,
    RoutingModule,
    FormsModule,
    // AnimationsModule: Lazy loaded
    NgstoreModule,
    WildcardRoutingModule,
    StoreModule.forRoot(reducers),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
