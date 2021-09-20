import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from './Card';

export default {
  component: Component,
  title: 'Atoms/Card',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Card = Template.bind({});
Card.args = {
  children: <div>Card content</div>,
  title: 'Card title',
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  children: <div>Card content</div>,
};
