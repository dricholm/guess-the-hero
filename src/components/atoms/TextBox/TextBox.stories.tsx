import { Meta, StoryObj } from '@storybook/react';
import Component from './TextBox';

export default {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ullam blanditiis atque ex quasi quo, eius illum voluptate! Adipisci quisquam in voluptatum quasi est, amet eos. Labore expedita autem obcaecati!',
  },
  component: Component,
} as Meta<typeof Component>;

export const Primary: StoryObj<typeof Component> = {
  args: {
    variant: 'primary',
  },
};

export const Info: StoryObj<typeof Component> = {
  args: {
    variant: 'info',
  },
};
