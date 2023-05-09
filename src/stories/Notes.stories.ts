import type { Meta, StoryObj } from '@storybook/react';
import Notes from '../components/Notes';

const meta: Meta<typeof Notes> = {
  title: 'Components/Notes',
  component: Notes,
  tags: ['autodocs'],
  argTypes: {
    label: { type: 'string' },
    content: { type: 'string' },
  }
};


const label = "テスト注意事項事項"
const content = "yooooooooooooooooooo"

export default meta;
type Story = StoryObj<typeof Notes>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  args: {
    label: label,
    content: content,
  },
};

