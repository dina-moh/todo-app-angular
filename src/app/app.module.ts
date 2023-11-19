import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {createCustomElement} from "@angular/elements";
import { ControllerComponent } from './controller/controller.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    TodoListComponent,
    ControllerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  ngDoBootstrap() {}
  constructor(private injector: Injector) {

    const UserList = createCustomElement(UserListComponent, {
      injector: this.injector,
    });
    customElements.define('user-list', UserList);

    const TodoList = createCustomElement(TodoListComponent, {
      injector: this.injector,
    });
    customElements.define('to-do-list', TodoList);

    const TodoListApp = createCustomElement(ControllerComponent, {
      injector: this.injector,
    });
    customElements.define('to-do-list-app', TodoListApp);
    
  }
 }
