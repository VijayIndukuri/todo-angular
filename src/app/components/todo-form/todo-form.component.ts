import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent implements OnInit {
  @Input() isVisible = false;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  todo: any = {
    Name: '',
    Description: '',
    Done: false,
    Expenses: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.todo.Name.trim()) {
      return; // Don't add empty todos
    }

    this.save.emit(this.todo);
    this.resetForm();
  }

  onCancel(): void {
    this.close.emit();
    this.resetForm();
  }

  private resetForm(): void {
    this.todo = {
      Name: '',
      Description: '',
      Done: false,
      Expenses: 0
    };
  }
}
