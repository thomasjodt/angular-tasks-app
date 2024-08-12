import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: string = 'test01'
  password: string = 'test01'

  getAuth(): boolean {
    const storedToken = localStorage.getItem('authToken')
    if (storedToken === null) return false

    const token = JSON.parse(storedToken)
    return token.username === this.username && token.password === this.password
  }

  setToken (username: string, password: string): void {
    if (username !== this.username || password !== this.password) {
      throw new Error('El usuario y/o contraseña son incorrectos')
    }
    const token = { username, password }
    localStorage.setItem('authToken', JSON.stringify(token))
  }

  deleteToken (): void {
    localStorage.removeItem('authToken')
  }
}
