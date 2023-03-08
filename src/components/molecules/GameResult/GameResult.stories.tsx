import { Meta, StoryObj } from '@storybook/react';
import Component from './GameResult';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Correct: StoryObj<typeof Component> = {
  args: {
    heroId: 1,
    isCorrect: true,
  },
};

export const Incorrect: StoryObj<typeof Component> = {
  args: {
    heroId: 2,
    isCorrect: false,
  },
};
