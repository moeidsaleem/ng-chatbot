import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{ path: '', component: DashboardComponent }, { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }, { path: 'goals', loadChildren: () => import('./goals/goals.module').then(m => m.GoalsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
