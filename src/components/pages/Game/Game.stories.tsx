import { ComponentMeta, ComponentStory } from '@storybook/react';
import Base from '../../molecules/Base';
import Component from './Game';

export default {
  component: Component,
  decorators: [
    (Story) => (
      <div id="__next" style={{ minHeight: '100vh' }}>
        <Base>
          <Story />
        </Base>
      </div>
    ),
  ],
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
