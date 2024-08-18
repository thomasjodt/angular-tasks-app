import { createReducer, on } from '@ngrx/store'

import { type AuthState } from '@/core/models'
import { login, logout } from '../actions'

export const AUTH_REDUCER_KEY = 'auth'

const initialState: AuthState = {
  token: null
}

export const authReducer = createReducer(
  initialState,
  on(login, (state, { token }) => ({ ...state, token })),
  on(logout, () => ({ token: null }))
)