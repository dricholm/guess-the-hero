import { ComponentMeta, ComponentStory } from '@storybook/react';

import Component from './HeroSelect';

export default {
  args: {
    disabled: false,
    heroIds: Array.from({ length: 10 }, (_, index) => index + 1),
  },
  component: Component,
  title: 'Molecules/HeroSelect',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const HeroSelect = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
