import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { DetailComponent } from './detail.component';
import { TodolistService } from '../../services/todolist.service';
import { of } from 'rxjs';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let todolistService: TodolistService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1'
              }
            }
          }
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    todolistService = TestBed.inject(TodolistService);
    
    // Mock the TodolistService to return a mock todo
    jest.spyOn(todolistService, 'getTodoById').mockReturnValue(of({
      Id: 1,
      Name: 'Test Todo',
      Description: 'Test Description',
      Done: false,
      Created: 1618481792000,
      Expenses: 27980.3273
    }));
    
    fixture.detectChanges();
  });

  it('should create component with todo data', () => {
    expect(component).toBeTruthy();
    expect(component.todo).toBeDefined();
    expect(component.todo.Name).toBe('Test Todo');
    expect(component.todo.Description).toBe('Test Description');
  });

  it('should display the correct todo data', () => {
    const createdDate: string = component.getCreatedDate(component.todo.Created);
    const daysOld: string | number = component.getDaysOld(component.todo.Created);
    expect(fixture.nativeElement.querySelector('#id').textContent).toContain('1');
    //expect(fixture.nativeElement.querySelector('#name').textContent).toContain('Test Todo');
    expect(fixture.nativeElement.querySelector('#created-date').textContent).toContain(createdDate);
    expect(fixture.nativeElement.querySelector('#expenses').textContent).toContain('27,980.33');
    expect(fixture.nativeElement.querySelector('#days-old').textContent).toContain(daysOld.toString());
  });
});
