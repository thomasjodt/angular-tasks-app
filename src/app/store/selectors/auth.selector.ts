import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AuthState } from '@/core/models'
import { AUTH_REDUCER_KEY } from '../reducers'

export const selectAuth = createFeatureSelector<AuthState>(AUTH_REDUCER_KEY)

export const selectToken = createSelector(
  selectAuth,
  (state) => state.token
)