import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from './TextBox';

export default {
  component: Component,
  title: 'Atoms/TextBox',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const TextBox = Template.bind({});
TextBox.args = {
  children: (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ullam
      blanditiis atque ex quasi quo, eius illum voluptate! Adipisci quisquam in
      voluptatum quasi est, amet eos. Labore expedita autem obcaecati!
    </div>
  ),
};
