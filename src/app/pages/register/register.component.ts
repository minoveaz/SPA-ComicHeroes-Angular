import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModel;

  constructor() { }

  ngOnInit(): void {
    this.user = new UserModel();
    this.user.email = 'ing.miller.vega@gmail.com';
    this.user.name = 'Miller Camilo';
    this.user.lastName = 'Vega Diaz';
    this.user.password = '1234';
    this.user.gender = 'M';
  }

  onSubmit(){
    console.log('Formulario enviado');
    console.log(this.user);
  }

}
