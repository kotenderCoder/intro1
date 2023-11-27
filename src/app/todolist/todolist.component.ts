import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, CommonModule],
  standalone: true,
  selector: 'app-todo-list',
  templateUrl: 'todolist.component.html',
  styles: []
})

export class TodoListComponent {
  input?: string;
  todos: string[] = ['Angular lernen', 'Angular anwenden', 'Angular meistern'];

  add() {
    if(this.input === undefined) return;
    if (this.input.trim() !== '') {
      this.todos.push(this.input);
      this.input = '';
    }
  }

  delete(todo: string) {
    this.todos = this.todos.filter(item => item !== todo);
  }
}
