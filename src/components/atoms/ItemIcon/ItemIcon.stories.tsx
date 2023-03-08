import { Meta, StoryObj } from '@storybook/react';
import Component from './ItemIcon';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Empty: StoryObj<typeof Component> = {};

export const Normal: StoryObj<typeof Component> = {
  args: {
    id: 1,
  },
};

export const Backpack: StoryObj<typeof Component> = {
  args: {
    id: 1,
    type: 'backpack',
  },
};

export const Neutral: StoryObj<typeof Component> = {
  args: {
    id: 287,
    type: 'neutral',
  },
};
