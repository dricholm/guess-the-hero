import { ComponentMeta, ComponentStory } from '@storybook/react';
import Component from './Loader';

export default {
  component: Component,
  title: 'Atoms/Loader',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Loader = Template.bind({});
