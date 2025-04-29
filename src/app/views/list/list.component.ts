import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodolistService } from '../../services/todolist.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from '../../components/todo-form/todo-form.component';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoFormComponent, TodoItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit, OnDestroy {

  todos: any[] = [];
  showTodoForm = false;
  private todosSubscription: Subscription | null = null;

  constructor(private todolistService: TodolistService) { }

  ngOnInit(): void {
    this.loadTodos();
    
    // Subscribe to the todos observable to get real-time updates
    this.todosSubscription = this.todolistService.getTodosAsObservable().subscribe(todos => {
      this.todos = todos;
      console.log('Todos updated from observable:', this.todos);
    });
  }
  
  ngOnDestroy(): void {
    // Clean up subscription when component is destroyed
    if (this.todosSubscription) {
      this.todosSubscription.unsubscribe();
    }
  }

  loadTodos(): void {
    this.todolistService.getTodos().subscribe((todos) => {
      this.todos = todos;
      console.log(this.todos);
    });
  }
  
  toggleTodo(todo: any): void {
    // Create a copy with the Done property toggled
    const updatedTodo = { 
      ...todo, 
      Done: !todo.Done 
    };
    
    // Update via the service (now in-memory)
    this.todolistService.updateTodo(updatedTodo).subscribe(() => {
      console.log('Todo updated successfully');
    });
  }

  openTodoForm(): void {
    this.showTodoForm = true;
  }

  closeTodoForm(): void {
    this.showTodoForm = false;
  }

  saveTodo(todoData: any): void {
    // Create a new todo with the current date and a unique ID
    const todo = {
      ...todoData,
      Id: this.generateUniqueId(),
      Created: new Date().toISOString() // ISO string format for dates
    };

    // Add the todo via the service
    this.todolistService.addTodo(todo).subscribe(() => {
      console.log('Todo added successfully');
      this.closeTodoForm();
    });
  }

  // Generate a simple unique ID (for in-memory usage)
  private generateUniqueId(): number {
    if (this.todos.length === 0) {
      return 1;
    }
    // Find the maximum ID and add 1
    return Math.max(...this.todos.map(todo => todo.Id)) + 1;
  }
}
