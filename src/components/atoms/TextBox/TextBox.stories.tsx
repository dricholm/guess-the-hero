import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from './TextBox';

export default {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ullam blanditiis atque ex quasi quo, eius illum voluptate! Adipisci quisquam in voluptatum quasi est, amet eos. Labore expedita autem obcaecati!',
  },
  component: Component,
  title: 'Atoms/TextBox',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
};
