import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TodoListComponent } from './todolist/todolist.component';
import { HangmanComponent } from './hangman/hangman.component';
import { BoardComponent } from './board/board.component';

export const routes: Routes = [
  { path: '', component: CounterComponent },
  { path: 'todo', component: TodoListComponent },
  { path: 'hangman', component: HangmanComponent },
  { path: 'board', component: BoardComponent },
];
