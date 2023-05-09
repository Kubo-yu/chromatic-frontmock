import type { Meta, StoryObj } from '@storybook/react';
import FileButton, {FileButtonProps} from '../components/FileButton';

const meta: Meta<typeof FileButton> = {
  title: 'Components/FileButton',
  component: FileButton,
  tags: ['autodocs'],
};


const handleFileSelected = (files: FileList) => {
  console.log(files);
};

export default meta;
type Story = StoryObj<typeof FileButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  args: {
    onSelect: handleFileSelected,
    label: 'ファイルを選択',
  },
};

