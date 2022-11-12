import { ComponentMeta, ComponentStory } from '@storybook/react';
import Component from './Game';

export default {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/Game',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Game = Template.bind({});
Game.args = {
  stats: {
    matchId: 1,
    player: {
      heroId: 1,
      items: {
        backpack: [],
        inventory: [1],
        neutral: 0,
      },
    },
  },
};
