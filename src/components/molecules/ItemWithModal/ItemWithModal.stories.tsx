import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Component from './ItemWithModal';

export default {
  component: Component,
} as Meta<typeof Component>;

export const ItemWithModal: StoryObj<typeof Component> = {
  args: {
    id: 1,
  },
};
