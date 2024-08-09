import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../../services'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  auth = inject(AuthService)
  router = inject(Router)
  username!: string

  logout(): void {
    this.auth.deleteToken()
    this.router.navigateByUrl('/login')
  }

  ngOnInit() {
    const storedToken = localStorage.getItem('authToken')
    if (storedToken !== null) {
      const token = JSON.parse(storedToken)
      this.username = token.username
    }
  }
}
