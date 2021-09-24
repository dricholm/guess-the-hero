import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from './Button';

export default {
  args: {
    children: 'Button content',
  },
  component: Component,
  title: 'Atoms/Button',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Button = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  children: 'Button content',
  size: 'large',
};

export const Link = Template.bind({});
Link.args = {
  href: '#',
};
