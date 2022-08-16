import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuardGuard } from './guards/authentication-guard.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  // },
  {
    path: 'login', 
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    // canActivate: [AuthenticationGuardGuard]
  },
  {
    path: 'home', 
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthenticationGuardGuard]
  },
  {
    path: 'hierarchy', 
    loadChildren: () => import('./modules/hierarchy/hierarchy.module').then(m => m.HierarchyModule),
    canActivate: [AuthenticationGuardGuard]
  },
  {
    path: 'schedules', 
    loadChildren: () => import('./modules/schedules/schedules.module').then(m => m.SchedulesModule),
    canActivate: [AuthenticationGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
