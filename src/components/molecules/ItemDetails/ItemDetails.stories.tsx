import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from './ItemDetails';

export default {
  component: Component,
  title: 'Molecules/ItemDetails',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Satanic = Template.bind({});
Satanic.args = {
  id: 156,
};

export const PhilosophersStone = Template.bind({});
PhilosophersStone.args = {
  id: 290,
};

export const Recipe = Template.bind({});
Recipe.args = {
  id: 109,
};
