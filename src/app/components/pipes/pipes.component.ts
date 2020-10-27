import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre = 'Capitan America';
  nombre2 = 'miLLEr cAMilo VeGA';
  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  PI = Math.PI;
  percentage = 0.4567;
  salary = 1650;
  fecha = new Date();
  activar = true;
  idioma = 'en';
  videoUrl = 'https://www.youtube.com/embed/OCyLyOAodwY';

  valorPromesa = new Promise<string> ((resolve) => {
    setTimeout( () => {
      resolve('llego la data');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
