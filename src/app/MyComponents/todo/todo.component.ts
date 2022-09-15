import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.todos = JSON.parse(localStorage.getItem("todos") || "[]");
  }

  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log(todo);
  }

  AddTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
