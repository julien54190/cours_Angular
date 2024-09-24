import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FruitComponent } from './fruit/fruit.component';
import { IfDirective } from './if.directive';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    IfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
