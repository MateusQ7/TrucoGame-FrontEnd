import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  form!: FormGroup

  constructor(private FormBuilder: FormBuilder){

  }
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
      ]]

    })
  }

}
