import { Meta, StoryObj } from '@storybook/react';
import Component from './Loading';

export default {
  args: {
    message: 'Message',
  },
  component: Component,
} as Meta<typeof Component>;

export const Loading: StoryObj<typeof Component> = {};
