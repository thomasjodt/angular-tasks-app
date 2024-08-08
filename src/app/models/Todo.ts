export class Todo {
  id: number
  isDone: boolean
  description: string

  constructor(description: string, isDone?: boolean, id?: number) {
    this.description = description
    this.isDone = isDone ?? false
    this.id = id ?? Date.now()
  }
}
