import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from './Header';

export default {
  component: Component,
  title: 'Atoms/Header',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Header = Template.bind({});
