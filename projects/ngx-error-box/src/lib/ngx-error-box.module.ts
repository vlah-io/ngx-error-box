import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ErrorBoxComponent} from './component/error-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorBoxComponent
  ],
  exports: [
    ErrorBoxComponent
  ]
})
export class NgxErrorBoxModule {
}
