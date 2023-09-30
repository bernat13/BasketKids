import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'partidos',
    loadChildren: () => import('./partidos/list-partidos/list-partidos.module').then( m => m.ListPartidosPageModule)
  },
  {
    path: 'partidos/:id',
    loadChildren: () => import('./partidos/vista-partido/vista-partido.module').then( m => m.VistaPartidoPageModule)
  },
  {
    path: 'equipos/:id',
    loadChildren: () => import('./equipos/detail-equipo/detail-equipo.module').then( m => m.DetailEquipoPageModule)
  }
  // {
  //   path: 'partidos',
  //   loadChildren: () => import('./partidos/partidos.module').then( m => m.PartidosPageModule)
  // },
  // {
  //   path: 'equipos',
  //   loadChildren: () => import('./equipos/equipos.module').then( m => m.EquiposPageModule)
  // },
  // {
  //   path: 'equipo/:id',
  //   loadChildren: () => import('./_borrar/equipo/equipo.module').then( m => m.EquipoPageModule)
  // },
  // {
  //   path: 'jugador',
  //   loadChildren: () => import('./jugador/jugador.module').then( m => m.JugadorPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
