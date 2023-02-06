import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaysComponent } from './main/plays/plays.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'plays', component: PlaysComponent},
  { path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }