import { Meta, StoryObj } from '@storybook/react';
import Component from './HeroIcon';

export default {
  component: Component,
} as Meta<typeof Component>;

export const HeroIcon: StoryObj<typeof Component> = {
  args: {
    id: 1,
  },
};
