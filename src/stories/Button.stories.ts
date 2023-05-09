import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: '入金',
  },
};

export const WithLink: Story = {
  args: {
    label: '入金',
    link: 'google.com'
  },
};

export const Submit: Story = {
  args: {
    label: '送信',
    type: "submit"
  },
};

