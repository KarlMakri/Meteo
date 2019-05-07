import { MeteoComponent } from './meteo/meteo.component';
import { AffichageComponent } from './affichage/affichage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {'path': 'list', 'component': AffichageComponent},
  {'path': 'meteo', 'component': MeteoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
