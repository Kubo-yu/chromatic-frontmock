import {useState} from 'react';
import {MessageDialog} from './MessageDialog';
import {Button} from './ButtonA';


export const DialogButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div>
      <Button onClick={openDialog}>ダイアログを開く</Button>
      <MessageDialog 
        title="サンプルダイアログ"
        description="これはサンプルのダイアログです。"
        isOpen={isOpen}
        onClickClose={closeDialog}
      ></MessageDialog>
    </div>
  )

}