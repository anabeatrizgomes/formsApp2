import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 fromLogin: FormGroup;
  constructor( private formBuilder: FormBuilder) {
    this.fromLogin = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(8)])],
    });
  }

  ngOnInit() {
  }
  salvarLogin(){
    console.log('Formulário: ', this.fromLogin.valid);
  }

}
