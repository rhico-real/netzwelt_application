import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'home/index', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home/index', component: HomeComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/home/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
