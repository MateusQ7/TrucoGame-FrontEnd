import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  
  form!: FormGroup

  constructor(private FormBuilder: FormBuilder){}
  
  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      user: [{
        value: '',
        disabled: false
      },[
        Validators.required,

      ]],
      password: [{
        value:'',
        disabled: false
      },[
        Validators.required,
      ]],
      password_confirm: [{
        value: '',
        disabled: false
      },[
        Validators.required,
      ]],
      email: [{
        value: '',
        disabled: false
      },[
        Validators.required,
      ]],
    })
  } 
}
