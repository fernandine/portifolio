import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {ToggleButtonModule} from 'primeng/togglebutton';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonModule,
    ToggleButtonModule
  ]
})
export class PrimengModule { }
