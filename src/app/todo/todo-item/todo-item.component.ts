import { Component, inject, Input } from '@angular/core'
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/todo.service'
import { CheckboxComponent } from '../../shared/checkbox/checkbox.component'

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './todo-item.component.html'
})
export class TodoItemComponent {
  todoService = inject(TodoService)

  @Input() todo!: Todo

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
