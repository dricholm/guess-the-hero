import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from './ItemList';

export default {
  component: Component,
  title: 'Molecules/ItemList',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const ItemList = Template.bind({});
ItemList.args = {
  ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  title: 'Item list',
};
