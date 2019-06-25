import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  @Input()
  todoList: Array<Todo> = [];

  addtask(title: string) {
    this.todoList = [...this.todoList, new Todo( title, false)];
  }

  removetasks() {
    this.todoList = [];
}
 updateTodo(todo: Todo){
   todo.isDone = !todo.isDone;

 }

  constructor() { }

  ngOnInit() {
    this.todoList = [
      new Todo('take the ball', false),
      new Todo('dribbling', false),
      new Todo('kidding', false),
      new Todo('scoring', false)];
  }

}
