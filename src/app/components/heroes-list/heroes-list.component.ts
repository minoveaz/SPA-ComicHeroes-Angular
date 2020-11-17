import { Component, OnInit } from '@angular/core';
import { HeroesfirebaseService } from '../../services/heroesfirebase.service';
import { HereoeModel } from '../../models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: HereoeModel[] = [];
  cargando = false;

  constructor( private heroesService: HeroesfirebaseService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.heroesService.getHeroes()
      .subscribe( resp => {
        console.log(resp);
        this.heroes = resp;
        this.cargando = false;
      });
  }

  borrarHeroe( heroe: HereoeModel, i: number){

    Swal.fire({
      title: '¿Esta seguro',
      text: `Esta seguro que quiere borrar a ${ heroe.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if ( resp.value) {
        this.heroes.splice(i, 1);
        this.heroesService.borrarHeroe( heroe.id).subscribe();
      }
    });
  }

}
