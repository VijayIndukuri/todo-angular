import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {
  
  constructor() { }
  
  getFormattedDate(date: string): string {
    const todoDate = new Date(date);
    return isNaN(todoDate.getTime()) 
      ? 'Invalid date' 
      : todoDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' });
  }
  
  getDaysOld(date: string): number | string {
    const todoDate = new Date(date);
    if (isNaN(todoDate.getTime())) {
      return 'Invalid date';
    }
    
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - todoDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  }
} 