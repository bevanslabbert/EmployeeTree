import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuardGuard } from './guards/authentication-guard.guard';

const routes: Routes = [
  {
    path: 'login', 
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    // canActivate: [AuthenticationGuardGuard]
  },
  {
    path: 'home', 
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthenticationGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
