import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ComponentsModule } from './components/components.module';
import { WildcardRoutingModule } from './wildcard-routing/wildcard-routing.module';
import { DirectivesModule } from './directives/directives.module';
import { FirebaseModule } from './firebase/firebase.module';
import { RoutingModule } from './routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from './forms/forms.module';

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
    WildcardRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}