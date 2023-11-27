import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TodoListComponent } from './todolist/todolist.component';

export const routes: Routes = [
  { path: '', component: CounterComponent },
  { path: 'todo', component: TodoListComponent }  
];
