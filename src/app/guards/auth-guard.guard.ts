import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from '../services'

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  authService.getAuth().subscribe(isLogged => {
    if (!isLogged) {
      router.navigateByUrl('/login')
    }
  })
  return authService.getAuth()
}
