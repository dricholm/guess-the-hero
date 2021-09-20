import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from './HeroIcon';

export default {
  component: Component,
  title: 'Atoms/HeroIcon',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const HeroIcon = Template.bind({});
HeroIcon.args = {
  id: 1,
};
