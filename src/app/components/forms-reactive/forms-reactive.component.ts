import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css']
})
export class FormsReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder,
               private validators: ValidatorsService) {

    this.crearFormulario();
    this.cargarDataAlFormulario();
    this.crearListeners();

  }

  ngOnInit(): void {
  }

    get pasatiempos(){
      return this.forma.get('pasatiempos') as FormArray;
    }

    get nombreNoValido(){
      return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
    }

    get apellidoNoValido(){
      return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
    }

    get emailNoValido(){
      return this.forma.get('correo').invalid && this.forma.get('correo').touched;
    }

    get usuarioNovalido(){
      return this.forma.get('usuario').invalid && this.forma.get('usuario').touched;
    }

    get municipioNoValido(){
      return this.forma.get('direccion.municipio').invalid && this.forma.get('direccion.municipio').touched;
    }

    get ciudadNoValido(){
      return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched;
    }

    get pass1Novalido(){
      return this.forma.get('pass1').invalid && this.forma.get('pass1').touched;
    }

    get pass2Novalido(){
      const pass1 = this.forma.get('pass1').value;
      const pass2 = this.forma.get('pass2').value;

      return ( pass1 === pass2 ) ? false : true;
    }

    crearFormulario(){

      this.forma = this.fb.group({
        nombre    : ['', [Validators.required, Validators.minLength(5)] ],
        apellido  : ['', Validators.required],
        correo    : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        usuario   : ['', , this.validators.existeUsuario],
        pass1     : ['', Validators.required],
        pass2     : ['', Validators.required],
        direccion : this.fb.group({
          municipio : ['', Validators.required],
          ciudad    : ['', Validators.required],
        }),
        pasatiempos: this.fb.array([]),
      }, {
        validators: this.validators.passwordsIguales('pass1', 'pass2')
      });

    }

    crearListeners(){
      this.forma.valueChanges.subscribe( valor => {
        console.log(valor);
      });
      this.forma.statusChanges.subscribe( status => console.log(status));
    }

    cargarDataAlFormulario(){
      this.forma.setValue({
        nombre: 'Miller',
        apellido: 'Camilo',
        correo: 'ing.miller.vega@gmail.com',
        usuario: '',
        pass1: '123',
        pass2: '123',
        direccion: {
          municipio: 'Madrid',
          ciudad: 'Madrid'
        },
        pasatiempos: []

      });
    }

    agregarPasatiempo(){
      this.pasatiempos.push( this.fb.control(''));
    }

    borrarPasatiempo(i: number){
      this.pasatiempos.removeAt(i);
    }

    guardar(){
      console.log(this.forma);
      if (this.forma.invalid){
        return Object.values( this.forma.controls ).forEach( control => {
          if ( control instanceof FormGroup){
            Object.values( this.forma.controls ).forEach( control => control.markAllAsTouched());
          }else {
            control.markAsUntouched();
          }
        });
      }
      // post information
      this.forma.reset();
    }
}
