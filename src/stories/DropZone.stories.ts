import type { Meta, StoryObj } from '@storybook/react';
import DropZone from '../components/DropZone';

const meta: Meta<typeof DropZone> = {
  title: 'Components/DropZone',
  component: DropZone,
  tags: ['autodocs'],
};

const handleDrop = (acceptedFiles: File[]) => {
  console.log('Dropped file:', acceptedFiles[0]);
  // Do something with the dropped file
};

export default meta;
type Story = StoryObj<typeof DropZone>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    onDrop: handleDrop,
  },
};

