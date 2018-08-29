import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemComponent } from './item/item.component';
import { DropdownDirective } from './dropdown.directive';
import { ComponentsModule } from './components/components.module';
import { WildcardRoutingModule } from './wildcard-routing/wildcard-routing.module';
import { DirectivesModule } from './directives/directives.module';
import {FirebaseModule} from './firebase/firebase.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, ItemComponent, DropdownDirective],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // DatabindingModule: Lazy loaded
    DirectivesModule,
    ComponentsModule,
    FirebaseModule,
    WildcardRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
