import { Meta, StoryObj } from '@storybook/react';
import Component from './HeroIcon';

export default {
  args: {
    id: 0,
    loading: false,
  },
  component: Component,
} as Meta<typeof Component>;

export const HeroIcon: StoryObj<typeof Component> = {
  args: {
    id: 1,
  },
};

export const Loading: StoryObj<typeof Component> = {
  args: {
    loading: true,
  },
};
