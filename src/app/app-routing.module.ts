import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {HamfestComponent} from './hamfest/hamfest.component';
import {EventsComponent} from './events/events.component';
const routes: Routes = [
  {path: '',
 redirectTo: '/home',
 pathMatch: 'full'},
 {
   path: 'home',
   component: HomeComponent
 },
 {
   path: 'hamfest',
   component: HamfestComponent
  },
 {
   path: 'oidarevents',
   component: EventsComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
