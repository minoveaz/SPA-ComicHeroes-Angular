import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { NgStyleComponent } from './components/ng-style/ng-style/ng-style.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsReactiveComponent } from './components/forms-reactive/forms-reactive.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HereoCreateComponent } from './components/hereo-create/hereo-create.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { AuthGuard } from './guards/auth.guard';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { DonutchartComponent } from './components/donutchart/donutchart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { VirtualComponent } from './components/virtual/virtual.component';
import { DragComponent } from './components/drag/drag.component';
import { CountriesComponent } from './components/countries/countries.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent, canActivate: [ AuthGuard]},
  { path: 'heroes', component: HeroesComponent},
  { path: 'heroe/:id', component: HeroeComponent},
  { path: 'buscar/:termino', component: BuscadorComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'demos', component: NgStyleComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'forms-reactive', component: FormsReactiveComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'createheroe/:id', component: HereoCreateComponent},
  { path: 'heroelist', component: HeroesListComponent},
  { path: 'line', component: GraphicsComponent},
  { path: 'bar', component: BarchartComponent},
  { path: 'donut', component: DonutchartComponent},
  { path: 'radar', component: RadarChartComponent},
  { path: 'virtual', component: VirtualComponent},
  { path: 'drag', component: DragComponent},
  { path: 'countries', component: CountriesComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
