import { Meta, StoryObj } from '@storybook/react';

import Component from './HeroItems';

export default {
  component: Component,
} as Meta<typeof Component>;

export const HeroItems: StoryObj<typeof Component> = {
  args: {
    backpack: [110],
    inventory: [10, 20, 0, 0, 0, 220],
    neutral: 366,
  },
};

export const Loading: StoryObj<typeof Component> = {
  args: {
    backpack: undefined,
    inventory: undefined,
    neutral: undefined,
  },
};
