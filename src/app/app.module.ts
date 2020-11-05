import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localEs);
registerLocaleData(localFr);

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Servicios

import { HeroesService } from './services/heroes.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomsafePipe } from './pipes/domsafe.pipe';
import { ShowpasswordPipe } from './pipes/showpassword.pipe';
import { NgStyleComponent } from './components/ng-style/ng-style/ng-style.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
    PipesComponent,
    CapitalizadoPipe,
    DomsafePipe,
    ShowpasswordPipe,
    NgStyleComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HeroesService,
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
