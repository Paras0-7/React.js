import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './MyComponent/user-details/user-details.component';
import { UserComponent } from './MyComponent/user/user.component';
import { UsersListComponent } from './MyComponent/users-list/users-list.component';

const routes: Routes = [
  {
    path: 'active',
    component: UserComponent,
  },
  {
    path: 'deleted',
    component: UsersListComponent,
  },
  {
    path: 'manage',
    component: UserDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
