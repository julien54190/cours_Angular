import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { authGuard } from './auth.guard';
import { UserEditComponent } from './user-edit/user-edit.component';
import { formUserGuard } from './form-user.guard';
import { userResolver } from './user.resolver';

export const APP_ROUTES: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'users',
  component: UsersComponent,
  canActivate: [authGuard],// s'active que sur les route principal
  canActivateChild: [authGuard],// par rapport a children s'il y a bcp de route et pas mettre un canActivate a chaque route
  children: [
    {path: ':id',
    data: {
      title: 'page utilisateur'
    },
    resolve: {
      user: userResolver
    },
    component: UserComponent},
    {path: ':id/edit', canDeactivate: [formUserGuard] , component: UserEditComponent}
  ]
},
//{ path: '**', component: NotFoundComponent }
{ path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
