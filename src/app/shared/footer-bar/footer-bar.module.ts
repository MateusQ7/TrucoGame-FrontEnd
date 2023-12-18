import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBarComponent } from './footer-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FooterBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterBarComponent]
})
export class FooterBarModule { }
