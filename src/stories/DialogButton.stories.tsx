import type { Meta, StoryObj } from '@storybook/react';
import {DialogButton} from '../components/chromatic-test/DialogButton';
import { within, userEvent } from '@storybook/testing-library';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta: Meta<typeof DialogButton> = {
  title: 'Components/DialogButton',
  component: DialogButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DialogButton>;

export const Default: Story = {
  // chromatic viewport 設定
  // 設定しているのは画面幅、これによって、スマホやタブレットの指定の画面幅でテストできる。
  parameters: {
    chromatic: {
      viewport: [1200, 390]
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewPort: "iPohne13"
    }
  }
};

export const IsOpend: Story = {
  // ボタンをクリックした時の挙動を追加
  play: async({canvasElement}) => {
    // `canvasElement`内で操作を行うためのcanvasオブジェクトを作成。
    const canvas = within(canvasElement);

    // "ダイアログを開く"というテキストを含むボタンを探す。
    const button = await canvas.findByText("ダイアログを開く");
    
    // ボタンをクリック。
    await userEvent.click(button);
  },
  // chromatic viewport 設定
  // 設定しているのは画面幅、これによって、スマホやタブレットの指定の画面幅でテストできる。
  parameters: {
    chromatic: {
      viewport: [1200, 390]
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewPort: "iPohne13"
    }
  }
};

