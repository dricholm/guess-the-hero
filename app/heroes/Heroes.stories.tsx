import { Meta, StoryObj } from '@storybook/react';
import Component from './page';

export default {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Component>;

export const Heroes: StoryObj<typeof Component> = {};
