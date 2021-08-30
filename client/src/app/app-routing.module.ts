import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CardsComponent } from './views/cards/cards.component';
import { LearnComponent } from './views/learn/learn.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'learn/:slug', component: LearnComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
