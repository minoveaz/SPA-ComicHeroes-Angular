import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyD3ceS45CXNFwK7cfLboH7srHPoCifxhBI';

  userToken: string;

  // crear nuevo usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  constructor( private http: HttpClient) {
    this.leerToken();
  }

  logout(){
    localStorage.removeItem('token');

  }
  login(user: UserModel){
    const autData = {
      ...user,
      returnSecureToken: true
    };
    return this.http.post(`${this.url}signInWithPassword?key=${this.apikey}`, autData)
      .pipe(
        map( resp => {
          this.guardarToken( resp['idToken']);
          return resp;
        })
      );
  }


  newUser(user: UserModel){

    const autData = {
      ...user,
      returnSecureToken: true
    };

    return this.http.post(`${this.url}signUp?key=${this.apikey}`, autData)
      .pipe(
        map( resp => {
          this.guardarToken( resp['idToken']);
          return resp;
        })
      );
  }

  private guardarToken( idToken: string){

    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('Expira', hoy.getTime().toString());
  }

  leerToken(){
    if (localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado(): boolean {

    if ( this.userToken.length < 2){
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()){
      return true;
    }else {
      return false;
    }
  }
}
