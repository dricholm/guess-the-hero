import { ComponentMeta, ComponentStory } from '@storybook/react';
import Component from './page';

export default {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/Index',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Index = Template.bind({});
