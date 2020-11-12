import { NgModule, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectedGuard } from './guards/connected.guard';
import { NotConnectedGuard } from './guards/not-connected.guard';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./modules/connected/connected.module').then(m => m.ConnectedModule),
    canActivate : [ConnectedGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/not-connected/not-connected.module').then(m => m.NotConnectedModule),
    canActivate : [NotConnectedGuard]
  },
  {
    path: '**',
    redirectTo: 'user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
