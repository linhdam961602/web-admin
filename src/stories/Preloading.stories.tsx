import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Preloading from 'components/BasicComponents/Preloading';

export default {
  title: 'Preloading',
  component: Preloading,
} as ComponentMeta<typeof Preloading>;

const Template: ComponentStory<typeof Preloading> = (args) => (
  <Preloading {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: 'Preloading',
};
