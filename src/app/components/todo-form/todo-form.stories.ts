import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TodoFormComponent } from './todo-form.component';
import { FormsModule } from '@angular/forms';

const meta: Meta<TodoFormComponent> = {
  title: 'Components/TodoForm',
  component: TodoFormComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule]
    })
  ],
  tags: ['autodocs'],
  argTypes: {
    save: { action: 'save' },
    close: { action: 'close' }
  }
};

export default meta;
type Story = StoryObj<TodoFormComponent>;

export const Visible: Story = {
  args: {
    isVisible: true
  }
};

export const Hidden: Story = {
  args: {
    isVisible: false
  }
};

// Note: TodoFormComponent initializes its own todo object internally
// This story shows the form in visible state
export const WithPrefilledData: Story = {
  args: {
    isVisible: true
  },
  play: async ({ canvasElement, component }) => {
    // In a real implementation, we would access the component and set its todo property
    // This would require adding @ViewChild or similar in an actual test
    if (component) {
      component.todo = {
        Name: 'Sample Task',
        Description: 'This is a sample task description',
        Done: false,
        Expenses: 25.50
      };
    }
  }
}; 