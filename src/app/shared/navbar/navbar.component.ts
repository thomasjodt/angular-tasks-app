import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'
import { map, Observable } from 'rxjs'

import { logout, selectToken, appStore } from '@/store'
import { AuthService } from '@/services'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  private auth = inject(AuthService)
  private router = inject(Router)

  private store = inject(appStore)
  public username!: Observable<string | undefined>

  logout(): void {
    this.auth.deleteToken()
    this.store.dispatch(logout())
    this.router.navigateByUrl('/login')
  }

  ngOnInit () {
    this.username = this.store.select(selectToken)
    .pipe(map((token) => token?.username))
  }
}
