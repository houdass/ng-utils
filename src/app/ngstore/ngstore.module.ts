import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgstoreComponent } from './ngstore.component';
import { NgstoreRoutingModule } from './ngstore-routing.module';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoInfoComponent } from './todo/todo-info/todo-info.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [NgstoreRoutingModule, FormsModule, SharedModule],
  declarations: [NgstoreComponent, TodoListComponent, TodoInfoComponent]
})
export class NgstoreModule {}
