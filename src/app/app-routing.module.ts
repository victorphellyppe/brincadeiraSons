import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sons',
    loadChildren: () => import('./pages/sons/sons.module').then( m => m.SonsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then(m => m.EventsPageModule)
  },
  {
    path: 'contracts',
    loadChildren: () => import('./pages/contracts/contracts.module').then(m => m.ContractsPageModule)
  },
  {
    path: 'list-events',
    loadChildren: () => import('./pages/list-events/list-events.module').then( m => m.ListEventsPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
