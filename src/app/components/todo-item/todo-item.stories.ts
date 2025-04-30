import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TodoItemComponent } from './todo-item.component';
import { Router } from '@angular/router';
import { DateUtilsService } from '../../shared/date-utils.service';
import { CommonModule } from '@angular/common';

// Mock service for DateUtilsService
const mockDateUtilsService = {
  getFormattedDate: (date: string) => {
    return new Date(date).toLocaleDateString();
  }
};

// Mock router service
const mockRouter = {
  navigate: (...args: any[]) => {
    console.log('Navigation called with', args);
    return Promise.resolve(true);
  }
};

const meta: Meta<TodoItemComponent> = {
  title: 'Components/TodoItem',
  component: TodoItemComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      providers: [
        { provide: DateUtilsService, useValue: mockDateUtilsService },
        { provide: Router, useValue: mockRouter }
      ]
    })
  ],
  tags: ['autodocs'],
  argTypes: {
    toggleTodo: { action: 'toggleTodo' },
    todoDetail: { action: 'todoDetail' }
  }
};

export default meta;
type Story = StoryObj<TodoItemComponent>;

export const Default: Story = {
  args: {
    todo: {
      Id: 1,
      Name: 'Complete project',
      Done: false,
      Created: new Date().toISOString()
    }
  }
};

export const Completed: Story = {
  args: {
    todo: {
      Id: 2,
      Name: 'Review documentation',
      Done: true,
      Created: new Date().toISOString()
    }
  }
};

export const WithInvalidDate: Story = {
  args: {
    todo: {
      Id: 3,
      Name: 'Invalid date example',
      Done: false,
      Created: 'invalid-date'
    }
  }
}; 