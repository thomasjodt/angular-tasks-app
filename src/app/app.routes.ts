import { Routes } from '@angular/router'
import { authGuardGuard } from './guards/auth-guard.guard'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/tasks'
  },
  {
    path: 'tasks',
    loadComponent: () => import('./todo/todo.component').then(comp => comp.TodoComponent),
    canActivate: [authGuardGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(comp => comp.LoginComponent)
  },
  {
    path: '**',
    redirectTo: '/'
  }
]
