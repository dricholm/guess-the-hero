import { ComponentMeta, ComponentStory } from '@storybook/react';
import Base from '../../molecules/Base';
import Component from './Heroes';

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
  title: 'Pages/Heroes',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Heroes = Template.bind({});
