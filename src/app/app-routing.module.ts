import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlacarPageComponent } from './pages/placar-page/placar-page.component';
import { PlayNowPageComponent } from './pages/play-now-page/play-now-page.component';


const routes: Routes = [
  {
    path:"",
    component:HomePageComponent,
  },
  {
    path:"home",
    redirectTo:""
  },
  {
    path:"about",
    component:AboutPageComponent
  },
  {
    path:"score",
    component:PlacarPageComponent
  },
  {
    path:"play",
    component:PlayNowPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
