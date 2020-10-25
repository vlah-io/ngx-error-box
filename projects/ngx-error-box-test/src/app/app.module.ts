import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxErrorBoxModule} from '../../../ngx-error-box/src/lib/ngx-error-box.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxErrorBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
