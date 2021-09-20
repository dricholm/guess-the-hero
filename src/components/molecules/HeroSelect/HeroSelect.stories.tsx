import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from './HeroSelect';

export default {
  component: Component,
  title: 'Molecules/HeroSelect',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const HeroSelect = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};
