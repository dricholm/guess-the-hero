import { Meta, StoryObj } from '@storybook/react';
import Component from './Card';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Card: StoryObj<typeof Component> = {
  args: {
    children: <div>Card content</div>,
    title: 'Card title',
  },
};

export const WithoutTitle: StoryObj<typeof Component> = {
  args: {
    children: <div>Card content</div>,
  },
};
