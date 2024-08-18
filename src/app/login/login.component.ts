import { CommonModule } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

import { AuthService } from '@/services'
import { appStore, login } from '@/store'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  private router = inject(Router)
  private auth = inject(AuthService)
  private formBuilder = inject(FormBuilder)

  private store = inject(appStore)

  public loginForm!: FormGroup
  public errorMessage: string | null = null

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public login(): void {
    try {
      this.auth.setToken(this.loginForm.value.username, this.loginForm.value.password)

      this.store.dispatch(login({ token: { username: this.loginForm.value.username, password: this.loginForm.value.password }}))
      this.router.navigateByUrl('/tasks')
    } catch (error) {
      const message = (error as Error).message
      console.error(message)
      this.errorMessage = message
      this.loginForm.reset()
    }
  }

  public cleanErrorMessage (): void {
    if (this.errorMessage !== null) {
      this.errorMessage = null
    }
  }
}
