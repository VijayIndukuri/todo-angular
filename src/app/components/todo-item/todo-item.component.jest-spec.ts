import { TodoItemComponent } from './todo-item.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateUtilsService } from '../../shared/date-utils.service';


describe('TodoItemComponent', () => {
    let component: TodoItemComponent;
    let fixture: ComponentFixture<TodoItemComponent>;
    let dateUtilsService: DateUtilsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [TodoItemComponent],
        providers: [DateUtilsService]
    });
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(TodoItemComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display the todo item', () => {
    const fixture = TestBed.createComponent(TodoItemComponent);
    fixture.componentRef.setInput('todo', {
        Id: 1,
        Name: 'Test Todo',
        Description: 'Test Description',
        Done: false,
        Created: 1714418400,
        Expenses: 123.45
    });
    fixture.detectChanges();
    
    // Check for ID and Name in the component
    expect(fixture.nativeElement.querySelector('#id').textContent).toContain('1');
    expect(fixture.nativeElement.querySelector('#name').textContent).toContain('Test Todo');
  });

  it('should format the date correctly', () => {
    const fixture = TestBed.createComponent(TodoItemComponent);
    fixture.componentRef.setInput('todo', { 
      Id: 1,
      Name: 'Test Todo',
      Created: 15184819988792000
    });
    fixture.detectChanges();
    
    const dateElement = fixture.nativeElement.querySelector('#created-date');
    expect(dateElement.textContent).toContain('Invalid date');
  });
});
