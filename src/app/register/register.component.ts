import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormatedForm } from '../models/formatedForm';
import { RegisterService } from './register.service';
import { BackReponse } from './backResponse.interface';
import { Router } from '@angular/router';
import { error } from 'node:console';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  
  form!: FormGroup

  constructor(
    private FormBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
    ){}
  
  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      name: [{
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
        Validators.minLength(6)
      ]],
      password_confirm: [{
        value: '',
        disabled: false
      },[
        Validators.required,
        Validators.minLength(6)
      ]],
      email: [{
        value: '',
        disabled: false
      },[
        Validators.required,
      ]],
    })
  } 

  async submit () {
    const formatedForm: FormatedForm = {
      name: this.form.value.name,
      password: this.form.value.password,
      email: this.form.value.email
    };
    if(this.form.valid){
      this.registerService.submit(formatedForm).subscribe(
        (res) => {
          console.log(res)
          const backReponse: BackReponse = {
            status: res.status,
            message: res.message,
            data: res.data
          }
        },
        (error) => {
          const backReponse: BackReponse = {
            status: error.status,
            message: error.error.message
          }
        }
      )
    }
    return;
  }

  checkPasswordLength(passwordInput: string, errorKey: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: unknown } => {
      const parent = control.parent;
      if (!parent) {
        return {}
      }

      const otherControl = parent.get(passwordInput)
      const otherControlValue = otherControl?.value as string
      const actualControlValue = control.value as string
      if (actualControlValue.length < 6 || actualControlValue.length > 50) {
        return {
          [errorKey]: true,
        }
      }

      return {}

    }
  }

  goToLogin(){
    if(this.form.valid){
      this.router.navigate(['/login'])
    }
  }

}
