import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router,
               private auth: AuthService) { }

  ngOnInit(): void {
  }

  buscarHeroe( termino: string){
    this.router.navigate( ['/buscar', termino]);
  }

  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/home');
  }

}
