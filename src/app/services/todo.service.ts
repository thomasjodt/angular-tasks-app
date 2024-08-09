import { Injectable, signal, effect } from '@angular/core'
import { Todo } from '../models'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todoList = signal<Todo[]>([])

  constructor() {
    const storedTodos = localStorage.getItem('todos')
    const todos: Todo[] = (storedTodos !== null) ? JSON.parse(storedTodos) : []

    for (const todo of todos) {
      this.todoList.update(t => ([
        ...t,
        new Todo(todo.description, todo.isDone, todo.id)
      ]))
    }

    effect(() => {
      localStorage.setItem(
        'todos',
        JSON.stringify(this.todoList())
      )
    })
  }
}
