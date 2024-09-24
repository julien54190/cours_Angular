import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlimentComponent } from './add-aliment/add-aliment.component';
import { ListAlimentComponent } from './list-aliment/list-aliment.component';
import {FormsModule} from '@angular/forms';
import { AlimentService } from './aliment.service';

@NgModule({
  declarations: [
    AppComponent,
    AddAlimentComponent,
    ListAlimentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
