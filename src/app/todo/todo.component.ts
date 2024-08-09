import { Component, inject, WritableSignal } from '@angular/core'
import { CommonModule } from '@angular/common'

import type { Todo } from '../models'
import { TodoService } from '../services'
import { NavbarComponent } from '../shared'
import { TodoCreateComponent, TodoItemComponent } from '.'

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    TodoCreateComponent,
    TodoCreateComponent,
    TodoItemComponent
],
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  private todoService = inject(TodoService)

  public todoSignal: WritableSignal<Todo[]> = this.todoService.todoList

  public get todoList(): Todo[] {
    return this.todoService.todoList()
  }
}
