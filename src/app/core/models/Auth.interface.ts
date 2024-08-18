import { User } from '.'

export interface AuthState {
  token: User | null
}