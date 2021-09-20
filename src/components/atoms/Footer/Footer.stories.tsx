import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from './Footer';

export default {
  component: Component,
  title: 'Atoms/Footer',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Footer = Template.bind({});
