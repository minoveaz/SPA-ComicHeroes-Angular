import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HereoeModel } from '../models/heroe.model';
import { map , delay} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HeroesfirebaseService {

  private url = 'https://angular-html-c0d55.firebaseio.com';


  constructor( private http: HttpClient) { }

  crearHeroe(heroe: HereoeModel){
    return this.http.post(` ${ this.url}/heroes.json`, heroe)
            .pipe(
              map( (resp: any) => {
                heroe.id = resp.name;
                return heroe;
              })
            );
  }

  actualizarHeroe(heroe: HereoeModel){

    const heroeTemp = {
      ...heroe
    };

    delete heroeTemp.id;

    return this.http.put(`${ this.url}/heroes/${ heroe.id}.json`, heroeTemp);
  }

  borrarHeroe(id: string){
    return this.http.delete(`${this.url}/heroes/${ id}.json`);
  }

  getHeroe( id: string){
    return this.http.get(`${this.url}/heroes/${ id}.json`);
  }

  getHeroes(){
    return this.http.get(` ${ this.url}/heroes.json`)
            .pipe(
              map(this.crearArreglo),
              delay(1000)
            );
  }

  private crearArreglo( heroesObj: object){
    const heroes: HereoeModel[] = [];

    if (heroesObj === null) {return []; }

    Object.keys( heroesObj ). forEach( key => {
      const heroe: HereoeModel = heroesObj[key];
      heroe.id = key;
      heroes.push( heroe);
    });

    return heroes;

  }

}
