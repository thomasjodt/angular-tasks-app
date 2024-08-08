import { Component, inject, WritableSignal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from '../shared/navbar/navbar.component'
import { TodoCreateComponent } from './todo-create/todo-create.component'
import { TodoService } from '../services/todo.service'
import type { Todo } from '../models/Todo'
import { TodoItemComponent } from './todo-item/todo-item.component'

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
