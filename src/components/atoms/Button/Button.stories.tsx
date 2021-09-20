import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from './Button';

export default {
  component: Component,
  title: 'Atoms/Button',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Button = Template.bind({});
Button.args = {
  children: 'Button content',
};

export const Link = Template.bind({});
Link.args = {
  children: 'Link text',
  href: '#',
};
