
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormComponent } from './user-form/user-form.component'
import { UserComponent} from './user.component'

const usersRoutes: Routes = [
  { path: '', component: UserComponent, pathMatch: 'full' },
  { path: 'new', component: UserFormComponent},
  { path: 'edit/:id', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
