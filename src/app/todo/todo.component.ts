import { Component, inject } from '@angular/core'
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

  public get todoList(): Todo[] {
    return this.todoService.todoList()
  }

  public createTask (todo: Todo): void {
    this.todoService.todoList.update(t => ([ ...t, todo]))
  }
}
