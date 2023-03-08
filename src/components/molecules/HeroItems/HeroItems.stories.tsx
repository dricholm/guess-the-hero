import { Meta, StoryObj } from '@storybook/react';

import Component from './HeroItems';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Test: StoryObj<typeof Component> = {
  args: {
    backpack: [110],
    inventory: [10, 20, 0, 0, 0, 220],
    neutral: 366,
  },
};
