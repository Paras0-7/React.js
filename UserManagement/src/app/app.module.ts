import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './MyComponent/user/user.component';
import { UsersListComponent } from './MyComponent/users-list/users-list.component';
import { UserDetailsComponent } from './MyComponent/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
