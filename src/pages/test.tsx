import Button from '../components/Button'
import FileButton from '../components/FileButton'
import Notes from '../components/Notes'
import FormatDate from '../components/FormatDate'
import FormatNumber from '../components/FormatNumber'
import DropZone from '../components/DropZone'
import {DialogButton} from '../components/chromatic-test/DialogButton'
import { CountriesSearchComboBox } from '../components/chromatic-test/CountriesSearchComboBox'



export default function test() {
  const notesContent = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n
  `

  const handleFileSelected = (files: FileList) => {
    console.log(files);
  };

  const today: Date = new Date();
  const money: number = 21000;

  const handleDrop = (acceptedFiles: File[]) => {
    console.log('Dropped file:', acceptedFiles[0]);
  };

  
  return (
    <div>
      <Button label="リンクありボタン" link='https://www.google.com/'></Button>
      <Button label="リンクなしボタン"></Button>
      <FileButton onSelect={handleFileSelected} label="ファイルを選択"></FileButton>
      <Notes label='注意事項' content={notesContent} />
      {/* <FormatDate date={today} format='YYYY/MM/DD(Day)' />
      <FormatNumber number={money} format='WithSymbol' currency='円' /> */}
      <DropZone onDrop={handleDrop} />
      <DialogButton></DialogButton>
      <CountriesSearchComboBox></CountriesSearchComboBox>
    </div>
  )
}
