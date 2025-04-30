import { Meta } from '@storybook/angular';

const meta: Meta = {
  title: 'Introduction',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: `
# Todo Angular Application Component Library

This Storybook contains all the UI components used in the Todo Angular application.

## Components

The application consists of several key components:

- **TodoItem**: Displays individual todo items with completion status and created date
- **TodoForm**: Form for creating and editing todo items
- **Header**: Application header with the app title
- **Footer**: Application footer with copyright information

## Getting Started

Browse the components in the sidebar to see their different variations and states.

Each component includes:
- Documentation
- Interactive controls to adjust properties
- Code examples

## Development Guidelines

When developing new components or enhancing existing ones:

1. Maintain consistency with the existing design system
2. Ensure all components are responsive
3. Follow the established Angular patterns
4. Add appropriate stories for all variations of the component

## TailwindCSS Integration

This project uses TailwindCSS for styling. All components are designed with Tailwind utility classes.
        `
      }
    }
  }
};

export default meta;

export const About = {
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true }
    }
  }
}; 