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
    this.todolistService.getTodos().subscribe((todos) => {
      this.todos = todos;
      console.log(this.todos);
    })
  }
}
