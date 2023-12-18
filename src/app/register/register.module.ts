import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FooterBarModule } from '../shared/footer-bar/footer-bar.module';
import { NavBarModule } from '../shared/nav-bar/nav-bar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FooterBarModule,
    NavBarModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [RegisterComponent]
})
export class RegisterModule { }
