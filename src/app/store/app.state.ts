import { AuthState } from '@/core/models'
import { ActionReducerMap, Store } from '@ngrx/store'
import { AUTH_REDUCER_KEY, authReducer } from './reducers/auth.reducer'

export interface AppState {
  [AUTH_REDUCER_KEY]: AuthState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  auth: authReducer
}

export const appStore = Store<AppState>
