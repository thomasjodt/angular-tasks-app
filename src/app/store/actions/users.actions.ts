import { createAction, props } from '@ngrx/store'
import { AuthState } from '@/core/models'

export const login = createAction(
  '[Auth] Login',
  props<AuthState>()
)

export const logout = createAction('[Auth] Logout')