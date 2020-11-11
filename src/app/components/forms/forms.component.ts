import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  usuario = {
    nombre: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  guardar( forma: NgForm){
    console.log(forma);
    console.log(forma.value);
  }

}
