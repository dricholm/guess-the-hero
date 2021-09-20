import { ComponentMeta, ComponentStory } from '@storybook/react';
import Component from './GameResult';

export default {
  component: Component,
  title: 'Molecules/GameResult',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Correct = Template.bind({});
Correct.args = {
  heroId: 1,
  isCorrect: true,
};

export const Incorrect = Template.bind({});
Incorrect.args = {
  heroId: 2,
  isCorrect: false,
};
