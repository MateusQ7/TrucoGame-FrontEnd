import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormatedForm } from '../models/formatedForm';

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

  // async login () {
    
  //   if(this.form.valid){
  //     this.registerService.submit(formatedForm).subscribe(
  //       (res) => {
  //         console.log(res)
  //         const backReponse: BackReponse = {
  //           status: res.status,
  //           message: res.message,
  //           data: res.data
  //         }
  //       },
  //       (error) => {
  //         const backReponse: BackReponse = {
  //           status: error.status,
  //           message: error.error.message
  //         }
  //       }
  //     )
  //   }
  //   return;
  // }

}
