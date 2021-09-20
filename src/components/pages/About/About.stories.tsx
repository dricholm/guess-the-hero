import { ComponentMeta, ComponentStory } from '@storybook/react';
import Base from '../../molecules/Base';
import Component from './About';

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
  title: 'Pages/About',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const About = Template.bind({});
