import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular To Do List';
  todos = [
      {
      label: 'Bring Milk '
    },
    {
      label: 'Do Homework ',
    },
    {
      label: 'Clean House ',
    },
    {
      label: 'Wash Car ',
    }
  ];

  addTodo(newTodoLabel) {
    const newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false,
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter( t => t.label !== todo.label);
  }
}
