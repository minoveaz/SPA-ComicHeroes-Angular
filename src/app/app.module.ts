import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';
import { ScrollingModule} from '@angular/cdk/scrolling';


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
import { NgStyleComponent } from './components/ng-style/ng-style/ng-style.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsReactiveComponent } from './components/forms-reactive/forms-reactive.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HereoCreateComponent } from './components/hereo-create/hereo-create.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { GraphicsComponent } from './components/graphics/graphics.component';

// Pipes
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomsafePipe } from './pipes/domsafe.pipe';
import { ShowpasswordPipe } from './pipes/showpassword.pipe';
import { BarchartComponent } from './components/barchart/barchart.component';
import { DonutchartComponent } from './components/donutchart/donutchart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { VirtualComponent } from './components/virtual/virtual.component';
import { DragComponent } from './components/drag/drag.component';


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
    NgStyleComponent,
    FormsComponent,
    FormsReactiveComponent,
    LoginComponent,
    RegisterComponent,
    HereoCreateComponent,
    HeroesListComponent,
    GraphicsComponent,
    BarchartComponent,
    DonutchartComponent,
    RadarChartComponent,
    VirtualComponent,
    DragComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    ScrollingModule
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
