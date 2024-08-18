import { inject, Injectable } from '@angular/core'

import { User } from '@/core/models'
import { AppState, appStore, login } from '@/store'

const TOKEN_KEY = 'authToken'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [
    { username: 'test01', password: 'test01' }
  ]

  private store = inject(appStore)

  constructor () {
    if (this.isAuthenticated()) {
      const token = this.getToken()

      this.store.dispatch(login({ token: {
        username: token.username,
        password: token.password
      }}))
    }
  }

  private findUser (username: string, password: string): User | null {
    const user = this.users.find((user) => user.username === username)
    if (user === undefined) return null
    return (password === user.password) ? user : null
  }

  public isAuthenticated(): boolean {
    const storedToken = localStorage.getItem(TOKEN_KEY)
    if (storedToken === null) return false

    const token: User = JSON.parse(storedToken)
    
    return this.findUser(token.username, token.password) !== null
  }

  public getToken (): User {
    const storedToken = localStorage.getItem(TOKEN_KEY) as string
    const token: User = JSON.parse(storedToken)
    return token
  }

  public setToken (username: string, password: string): void {
    if (this.findUser(username, password) === null) {
      throw new Error('El usuario y/o contraseña son incorrectos')
    }
    const token: User = { username, password }
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
  }

  public deleteToken (): void {
    localStorage.removeItem(TOKEN_KEY)
  }
}
