import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  private baseUrl = 'https://boyumcodechallenge.azurewebsites.net/api'; // example API

  constructor(private http: HttpClient) { }

  // GET: Fetch all posts
  getTodos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/todolist`);
  }

}
