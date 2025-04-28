import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../../services/todolist.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  todos: any[] = [];

  constructor(private todolistService: TodolistService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todolistService.getTodos().subscribe((todos) => {
      this.todos = todos;
      console.log(this.todos);
    });
  }

  bla: boolean = false;
  clcikBla(): void {
    this.bla = !this.bla;
  }
  toggleTodo(todo: any): void {
    // Toggle the Done property locally
    todo.Done = !todo.Done;
    
    // Update the todo on the server
    this.todolistService.updateTodo(todo).subscribe({
      next: () => {
        console.log('Todo updated successfully');
      },
      error: (error) => {
        // Revert the change if update fails
        todo.Done = !todo.Done;
        console.error('Error updating todo:', error);
      }
    });
  }
}
