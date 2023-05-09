import type { Meta, StoryObj } from '@storybook/react';
import FormatNumber from '../components/FormatNumber';

const meta: Meta<typeof FormatNumber> = {
  title: 'Components/FormatNumber',
  component: FormatNumber,
  tags: ['autodocs'],
};

const number = 100000;

export default meta;
type Story = StoryObj<typeof FormatNumber>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WithCommas: Story = {
  args: {
    number: number,
    format: 1,
  },
};

export const WithDecimal: Story = {
  args: {
    number: number,
    format: 2,
  },
};

