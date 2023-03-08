import { Meta, StoryObj } from '@storybook/react';
import Component from './ItemList';

export default {
  component: Component,
} as Meta<typeof Component>;

export const ItemList: StoryObj<typeof Component> = {
  args: {
    ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: 'Item list',
  },
};
