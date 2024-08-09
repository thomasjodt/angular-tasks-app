import { Component, Input, OnInit, WritableSignal } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Todo } from '../../models'

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-create.component.html'
})
export class TodoCreateComponent implements OnInit {
  public createForm!: FormGroup
  
  @Input() todoList!: WritableSignal<Todo[]>

  constructor (private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      newTodo: [
        '',
        Validators.required,
      ]
    })
  }

  public handleAddTodo () {
    const value = this.createForm.value.newTodo.trim()
    if (value === '') return

    this.todoList.update(t => ([
      ...t,
      new Todo(value)
    ]))
  
    this.createForm.reset()

  }
}
