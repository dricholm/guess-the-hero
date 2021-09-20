import { ComponentMeta, ComponentStory } from '@storybook/react';
import Component from './ItemIcon';

export default {
  component: Component,
  title: 'Atoms/ItemIcon',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Empty = Template.bind({});

export const Normal = Template.bind({});
Normal.args = {
  id: 1,
};

export const Backpack = Template.bind({});
Backpack.args = {
  id: 1,
  type: 'backpack',
};

export const Neutral = Template.bind({});
Neutral.args = {
  id: 287,
  type: 'neutral',
};
