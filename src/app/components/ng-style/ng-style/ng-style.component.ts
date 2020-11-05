import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {


  // tslint:disable-next-line: no-inferrable-types
  tamano: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
