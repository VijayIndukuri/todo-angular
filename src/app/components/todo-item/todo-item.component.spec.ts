import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TodoItemComponent } from './todo-item.component';
import { DateUtilsService } from '../../shared/date-utils.service';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  
  const mockTodo = {
    Id: 1,
    Title: 'Test Todo',
    Description: 'Test Description',
    Done: false,
    Created: new Date().toISOString(),
    Updated: new Date().toISOString()
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItemComponent, RouterTestingModule],
      providers: [DateUtilsService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    // Provide mock todo data
    component.todo = mockTodo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
