import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./views/cards/cards.module').then((m) => m.CardsModule)
  },
  {
    path: 'learn/:slug',
    loadChildren: () => import('./views/learn/learn.module').then((m) => m.LearnModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
