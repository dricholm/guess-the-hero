import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import Component from './HeroSelect';

export default {
  args: {
    disabled: false,
    heroIds: Array.from({ length: 10 }, (_, index) => index + 1),
    onSubmit: action('onSubmit'),
  },
  component: Component,
} as Meta<typeof Component>;

export const HeroSelect: StoryObj<typeof Component> = {};

export const Disabled: StoryObj<typeof Component> = {
  args: {
    disabled: true,
  },
};

export const Loading: StoryObj<typeof Component> = {
  args: {
    heroIds: undefined,
  },
};
