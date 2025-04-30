import { Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from './footer.component';

const meta: Meta<FooterComponent> = {
  title: 'Shared/Footer',
  component: FooterComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<FooterComponent>;

export const Default: Story = {
  args: {}
}; 