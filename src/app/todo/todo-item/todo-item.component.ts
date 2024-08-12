import { Component, inject, Input } from '@angular/core'
import { Todo } from '../../models'
import { TodoService } from '../../services'
import { CheckboxComponent } from '../../shared'

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './todo-item.component.html'
})
export class TodoItemComponent {
  private todoService = inject(TodoService)

  @Input()
  public todo!: Todo

  public toggleTodo (id: number) {
    this.todoService.todoList.update(t => t.map(todo => {
      return (todo.id === id)
        ? new Todo(todo.description, !todo.isDone, todo.id)
        : todo
    }))
  }

  public removeTodo (id: number) {
    this.todoService.todoList.update(t => t.filter(
      todo => todo.id !== id
    ))
  }
}
