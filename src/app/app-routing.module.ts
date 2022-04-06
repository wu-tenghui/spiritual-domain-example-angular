import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {
  CanLoadGuard,
  CanActivateGuard,
  CanActivateChildGuard,
  CanDeactivateGuard,
} from './app-routing.guard';

import {environment} from '../environments/environment';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    canLoad: [CanLoadGuard],
    canActivate: [CanActivateGuard],
    canActivateChild: [CanActivateChildGuard],
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    canActivate: [CanActivateGuard]
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule',
    canActivate: [CanActivateGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: !environment.production})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
