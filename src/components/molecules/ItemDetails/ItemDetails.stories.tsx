import { Meta, StoryObj } from '@storybook/react';
import Component from './ItemDetails';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Satanic: StoryObj<typeof Component> = {
  args: {
    id: 156,
  },
};

export const PhilosophersStone: StoryObj<typeof Component> = {
  args: {
    id: 290,
  },
};

export const Recipe: StoryObj<typeof Component> = {
  args: {
    id: 109,
  },
};
