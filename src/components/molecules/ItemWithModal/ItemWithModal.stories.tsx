import { ComponentMeta, ComponentStory } from '@storybook/react';
import Component from './ItemWithModal';

export default {
  component: Component,
  title: 'Molecules/ItemWithModal',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const ItemWithModal = Template.bind({});
ItemWithModal.args = {
  id: 1,
};
