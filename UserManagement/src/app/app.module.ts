import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './MyComponent/users-list/users-list.component';
import { ActiveModule } from './MyModules/active/active.module';
import { DeletedModule } from './MyModules/deleted/deleted.module';
import { ManageModule } from './MyModules/manage/manage.module';

@NgModule({
  declarations: [AppComponent, UsersListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveModule,
    DeletedModule,
    ManageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
