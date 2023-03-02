import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonModule,
    ToggleButtonModule,
    MenubarModule
  ]
})
export class PrimengModule { }
