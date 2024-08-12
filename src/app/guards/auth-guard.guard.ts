import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from '../services'

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  const isLogged = authService.getAuth()

  if (!isLogged) {
    router.navigate(['/login'])
  }
  return authService.getAuth()
}
