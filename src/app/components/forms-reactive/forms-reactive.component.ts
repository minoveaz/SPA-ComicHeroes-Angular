import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css']
})
export class FormsReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder) {

    this.crearFormulario();

  }

  ngOnInit(): void {
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

    crearFormulario(){

      this.forma = this.fb.group({
        nombre  : ['', [Validators.required, Validators.minLength(5)] ],
        apellido: ['', Validators.required],
        correo  : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
      });

    }

    guardar(){
      console.log(this.forma);
    }
}
