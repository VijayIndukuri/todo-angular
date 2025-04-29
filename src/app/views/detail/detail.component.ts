import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TodolistService } from '../../services/todolist.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DateUtilsService } from '../../shared/date-utils.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  constructor(
    private location: Location, 
    private todolistService: TodolistService,
    private route: ActivatedRoute,
    private dateUtils: DateUtilsService
  ) {}

  todo: any;

  ngOnInit() {
    this.loadTodo();
  }

  loadTodo() {
    // Get the id parameter from the route
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    // Subscribe to the Observable returned by getTodoById
    this.todolistService.getTodoById(id).subscribe(data => {
      this.todo = data;
      
      // If todo is empty/null, try to refresh data from the service
      if (!this.todo) {
        this.todolistService.getTodos().subscribe(() => {
          // Try getting the todo again after refreshing the list
          this.todolistService.getTodoById(id).subscribe(refreshedData => {
            this.todo = refreshedData;
          });
        });
      }
    });
  }

  goBack() {
    this.location.back();
  }
  
  getCreatedDate(date: string): string {
    return this.dateUtils.getFormattedDate(date);
  }
  
  getDaysOld(date: string): number | string {
    return this.dateUtils.getDaysOld(date);
  }
}
