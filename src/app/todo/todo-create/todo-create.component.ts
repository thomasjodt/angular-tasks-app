import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Todo } from '../../models'

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-create.component.html'
})
export class TodoCreateComponent implements OnInit {
  private formBuilder = inject(FormBuilder)

  public createForm!: FormGroup
  public errorMessage: string | null = null

  @Output()
  public createTask: EventEmitter<Todo> = new EventEmitter()

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      newTodo: [
        '',
        Validators.required,
      ]
    })
  }

  public handleAddTodo (): void {
    const value = this.createForm.value.newTodo.trim()
  
    if (!/[a-zA-Z0-9\ ]/.test(value)) {
      const message = 'The value of the description contains invalid characters.'
      this.errorMessage = message
      this.createForm.reset()
      throw new Error(message)
    }

    this.createTask.emit(new Todo(value))
    this.createForm.reset()
  }

  public resetMessage (): void {
    this.errorMessage = null
  }
}
