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
    correo: ''
  };

  countries: any[] = [];

  constructor( private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries()
    .subscribe(countries  => {
      this.countries = countries;
      console.log(this.countries);
    });
  }

  guardar( forma: NgForm){
    console.log(forma);

    if (forma.invalid){
      Object.values(forma.controls).forEach( control => {
        control.markAsTouched();
      });
      return;
    }
    console.log(forma.value);
  }

}
