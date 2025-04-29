import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DateUtilsService } from '../../shared/date-utils.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  constructor(
    private router: Router,
    private dateUtils: DateUtilsService
  ) {}
  
  @Input() todo!: any;
  
  toggleTodo(todo: any): void {
    // Create a copy with the Done property toggled
    const updatedTodo = { 
      ...todo, 
      Done: !todo.Done 
    };
    
    // Update via the service (now in-memory)
    /*this.todolistService.updateTodo(updatedTodo).subscribe(() => {
      console.log('Todo updated successfully');
    });*/
  }
  
  todoDetail(): void {
    this.router.navigate(['/detail', this.todo.Id]);
  }
  
  getFormattedDate(date: string): string {
    return this.dateUtils.getFormattedDate(date);
  }
}
