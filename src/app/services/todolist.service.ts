import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  private baseUrl = 'https://boyumcodechallenge.azurewebsites.net/api'; // example API
  private todosSubject = new BehaviorSubject<any[]>([]);
  private todosStore: any[] = [];

  constructor(private http: HttpClient) { }

  // GET: Fetch all posts
  getTodos(): Observable<any[]> {
    // If we already have data, return it from the store
    if (this.todosStore.length > 0) {
      return of(this.todosStore);
    }

    // Otherwise fetch from API
    return this.http.get<any[]>(`${this.baseUrl}/todolist`).pipe(
      tap(todos => {
        this.todosStore = todos;
        this.todosSubject.next([...this.todosStore]);
      })
    );
  }

  // Update a todo in memory (no HTTP request)
  updateTodo(todo: any): Observable<any> {
    // Find and update the todo in our local store
    const index = this.todosStore.findIndex(t => t.Id === todo.Id);
    if (index !== -1) {
      this.todosStore[index] = {...todo};
      this.todosSubject.next([...this.todosStore]);
    }
    // Return the updated todo as an observable
    return of(todo);
  }

  // Add a new todo to the in-memory store
  addTodo(todo: any): Observable<any> {
    // Add the new todo to our local store
    this.todosStore = [...this.todosStore, todo];
    this.todosSubject.next([...this.todosStore]);
    
    // Return the new todo as an observable
    return of(todo);
  }

  // Get the todos as an observable that components can subscribe to
  getTodosAsObservable(): Observable<any[]> {
    return this.todosSubject.asObservable();
  }

  getTodoById(id: number): Observable<any> {
    const todo = this.todosStore.find(t => t.Id === id);
    return of(todo);
  }
}
