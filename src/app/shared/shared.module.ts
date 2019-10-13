import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStarComponent } from '../app-star/app-star.component';



@NgModule({
  declarations: [
    AppStarComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppStarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
