import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Ponto } from './ponto';
// import { PontoPage } from './ponto/ponto.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mapa',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './mapa/mapa.module#MapaPageModule'
  },
  { 
    path: 'pais/:alpha2Code',
    loadChildren: './pais/pais.module#PaisPageModule'
  },
  { 
    path: 'paises',
    loadChildren: './paises/paises.module#PaisesPageModule'
  },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
