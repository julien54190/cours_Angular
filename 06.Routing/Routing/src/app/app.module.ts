import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { UserEditComponent } from './user-edit/user-edit.component';



// const APP_ROUTES: Routes = [
//   {path: '', component: HomepageComponent},
//   {path: 'users', component: UsersComponent,
//   children: [{path: ':id', component: UserComponent}]
// },
// //{ path: '**', component: NotFoundComponent }
// { path: '**', redirectTo: '' }
// ] export dans le fichier app.routes.ts

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UsersComponent,
    UserComponent,
    NotFoundComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
