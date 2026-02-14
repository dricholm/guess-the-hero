import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Component from './page';

export default {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Component>;

export const Items: StoryObj<typeof Component> = {};
