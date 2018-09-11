import { BrowserModule } from '@angular/platform-browser';
import { isDevMode, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ComponentsModule } from './components/components.module';
import { WildcardRoutingModule } from './wildcard-routing/wildcard-routing.module';
import { DirectivesModule } from './directives/directives.module';
import { FirebaseModule } from './firebase/firebase.module';
import { RoutingModule } from './routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from './forms/forms.module';
import { NgstoreModule } from './ngstore/ngstore.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store/app.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
    isDevMode() ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
