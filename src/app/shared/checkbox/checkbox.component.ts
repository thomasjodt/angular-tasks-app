import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent {
  @Input() todo!: Todo
  @Output() onTodoChange = new EventEmitter()

  public handleChange() {
    this.onTodoChange.emit()
  }
}
