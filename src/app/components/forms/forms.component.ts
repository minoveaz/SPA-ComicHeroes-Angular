import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService} from '../../services/country.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    country: '',
    genero: 'M'
  };

  countries: any[] = [];

  constructor( private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries()
    .subscribe(countries  => {
      this.countries = countries;
      this.countries.unshift({
        name: '[Seleccione un País]',
        code: ''
      });
    });
  }

  guardar( forma: NgForm){

    if (forma.invalid){
      Object.values(forma.controls).forEach( control => {
        control.markAsTouched();
      });
      return;
    }
    console.log(forma.value);
  }

}
