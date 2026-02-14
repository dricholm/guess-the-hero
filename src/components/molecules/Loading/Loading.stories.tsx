import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Component from './Loading';

export default {
  args: {
    message: 'Message',
  },
  component: Component,
} as Meta<typeof Component>;

export const Loading: StoryObj<typeof Component> = {};
