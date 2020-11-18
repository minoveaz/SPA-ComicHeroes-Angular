import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserModel} from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModel;

  constructor( private auth: AuthService,
               private router: Router) { }

  ngOnInit(): void {
    this.user = new UserModel();
  }

  onSubmit( form: NgForm){

    if ( form.invalid){
      return;
    }else{

      Swal.fire({
        allowOutsideClick: false,
        text: 'Espere por favor...',
        icon: 'info'
      });
      Swal.showLoading();

      this.auth.newUser( this.user)
        .subscribe( resp => {
          console.log(resp);
          Swal.fire({
            title: this.user.email,
            text: 'Se ha registrado correctamente',
            icon: 'success'
          });
          this.router.navigateByUrl('/home');
        }, (err) => {
          console.log(err.error.error.message);
          Swal.fire({
            title: this.user.email,
            text: 'Este correo ya existe',
            icon: 'error'
          });
        });
    }
  }

}
