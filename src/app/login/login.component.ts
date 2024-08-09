import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../services'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  router = inject(Router)
  auth = inject(AuthService)

  loginForm!: FormGroup

  constructor (private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.auth.getAuth().subscribe((isLogged) => {
      if (isLogged) {
        this.router.navigateByUrl('/tasks')
        return
      }
    })

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    try {
      this.auth.setToken(this.loginForm.value.username, this.loginForm.value.password)
      this.router.navigateByUrl('/tasks')
    } catch (error) {
      console.error(error)
    }
  }
}
