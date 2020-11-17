import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HereoeModel } from '../../models/heroe.model';
import { HeroesfirebaseService } from '../../services/heroesfirebase.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hereo-create',
  templateUrl: './hereo-create.component.html',
  styleUrls: ['./hereo-create.component.css']
})
export class HereoCreateComponent implements OnInit {

  heroe: HereoeModel = new HereoeModel();

  constructor( private heroesService: HeroesfirebaseService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {

     const id = this.route.snapshot.paramMap.get('id');
     console.log(id);
     if ( id !== 'new'){
       this.heroesService.getHeroe(id)
          .subscribe( (resp: HereoeModel) => {
            this.heroe = resp;
            this.heroe.id = id;
          });
     }
  }

  guardar( form: NgForm){
    if ( form.invalid){
      console.log('Formulario no valid');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if ( this.heroe.id ){
      peticion = this.heroesService.actualizarHeroe( this.heroe);

    }else{
      peticion = this.heroesService.crearHeroe( this.heroe);
    }

    peticion.subscribe( resp => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizo correctamente',
        icon: 'success'
      });
    });

  }

}
