import type { Meta, StoryObj } from '@storybook/react';
import FormatDate from '../components/FormatDate';

const meta: Meta<typeof FormatDate> = {
  title: 'Components/FormatDate',
  component: FormatDate,
  tags: ['autodocs'],
};

const date = new Date("2023/01/01")

export default meta;
type Story = StoryObj<typeof FormatDate>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Hyphen: Story = {
  args: {
    date: date,
    format: 1
  },
};
export const HyphenWithTime: Story = {
  args: {
    date: date,
    format: 2
  },
};

export const Slash: Story = {
  args: {
    date: date,
    format: 3
  },
};

export const SlashWithDay: Story = {
  args: {
    date: date,
    format: 4
  },
};
