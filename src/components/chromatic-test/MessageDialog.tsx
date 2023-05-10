import React, { useState } from 'react';

interface MessageDialogProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClickClose: () => void;
}

export const MessageDialog: React.FC<MessageDialogProps> = ({
  title,
  description,
  isOpen,
  onClickClose,
}) => {
  if (!isOpen) {
    return null; // ダイアログが閉じている場合は表示しない
  }

  return (
    <div className="message-dialog">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onClickClose}>閉じる</button>
    </div>
  );
};