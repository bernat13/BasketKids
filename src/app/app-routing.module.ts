import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'partidos',
    loadChildren: () => import('./pages/partidos/list-partidos/list-partidos.module').then( m => m.ListPartidosPageModule)
   },
  // {
  //   path: 'partidos/:id',
  //   loadChildren: () => import('./pages/partidos/vista-partido/vista-partido.module').then( m => m.VistaPartidoPageModule)
  // },
  {
    path: 'equipos',
    loadChildren: () => import('./pages/equipos/list-equipos/list-equipos.module').then( m => m.ListEquiposPageModule)
  },
  {
    path: 'equipos/:id',
    loadChildren: () => import('./pages/equipos/detail-equipo/detail-equipo.module').then( m => m.DetailEquipoPageModule)
  },

  {
    path: 'jugadores',
    loadChildren: () => import('./pages/jugadores/list-jugadores/list-jugadores.module').then( m => m.ListJugadoresPageModule)
  },

  {
    path: 'jugadores/:id',
    loadChildren: () => import('./pages/jugadores/detail-jugador/detail-jugador.module').then( m => m.DetailJugadorPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },

  {
    path: 'partidos/:id',
    loadChildren: () => import('./pages/partidos/detail-partido/detail-partido.module').then( m => m.DetailPartidoPageModule)
  },

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
