import { ComponentMeta, ComponentStory } from '@storybook/react';
import Component from './Loading';

export default {
  args: {
    message: 'Message',
  },
  component: Component,
  title: 'Molecules/Loading',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Loading = Template.bind({});
