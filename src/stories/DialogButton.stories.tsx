import type { Meta, StoryObj } from '@storybook/react';
import {DialogButton} from '../components/DialogButton';
import { within, userEvent } from '@storybook/testing-library';

const meta: Meta<typeof DialogButton> = {
  title: 'Components/DialogButton',
  component: DialogButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DialogButton>;

export const Default: Story = {
};

// export const IsOpend: Story = {
//   play: async({canvasElement}) => {
//     const canvas = within(canvasElement);
//     const button = await canvas.findByText("ダイアログを開く")

//     await userEvent.click(button)
//   }
// };

