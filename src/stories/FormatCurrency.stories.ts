import type { Meta, StoryObj } from '@storybook/react';
import FormatCurrency from '../components/FormatCurrency';

const meta: Meta<typeof FormatCurrency> = {
  title: 'Components/FormatCurrency',
  component: FormatCurrency,
  tags: ['autodocs'],
};

const number = 100000;

export default meta;
type Story = StoryObj<typeof FormatCurrency>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const JPYLast: Story = {
  args: {
    number: number,
    format: 1,
  },
};

export const JPYFirst: Story = {
  args: {
    number: number,
    format: 2,
  },
};

export const USDLast: Story = {
  args: {
    number: number,
    format: 3,
  },
};
export const USDFirst: Story = {
  args: {
    number: number,
    format: 4,
  },
};

