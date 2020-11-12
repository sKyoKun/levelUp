import { NgModule, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch : 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NotConnectedRoutingModule { }
