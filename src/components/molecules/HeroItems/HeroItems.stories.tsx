import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from './HeroItems';

export default {
  component: Component,
  title: 'Molecules/HeroItems',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Test = Template.bind({});
Test.args = {
  backpack: [110],
  inventory: [10, 20, 0, 0, 0, 220],
  neutral: 366,
};
