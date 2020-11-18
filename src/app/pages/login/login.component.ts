import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel;
  recordarme = false;

  responseError: string;
  invalidPassError = 'INVALID_PASSWORD';
  invalidEmailError = 'EMAIL_NOT_FOUND';

  constructor( private auth: AuthService,
               private router: Router) { }

  ngOnInit(): void {
    this.user = new UserModel();

    if ( localStorage.getItem('email')){
      
    }
  }

  login( form: NgForm){

    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor...',
      icon: 'info'
    });
    Swal.showLoading();

    if (form.invalid) {return; }
    this.auth.login( this.user)
      .subscribe( resp => {
        console.log(resp);
        Swal.fire({
          title: this.user.email,
          text: 'Se ha iniciado sesión correctamente',
          icon: 'success'
        });

        if (this.recordarme){
          localStorage.setItem('email', this.user.email);
        }

        this.router.navigateByUrl('/home');
      }, (err) => {
        this.responseError = err.error.error.message;
        console.log(this.responseError);
        Swal.fire({
          title: this.responseError,
          text: 'Error al iniciar sesión',
          icon: 'error'
        });
      });

  }

}
