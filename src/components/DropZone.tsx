import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

type Props = {
  onDrop: (acceptedFiles: File[]) => void;
};

const Dropzone: React.FC<Props> = ({ onDrop }) => {
  const [errorMessage, setErrorMessage] = useState<string>();

  const onDropCallback = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) {
        setErrorMessage('Please upload a file');
      } else if (acceptedFiles.length > 1) {
        setErrorMessage('Only one file is allowed');
      } else {
        onDrop(acceptedFiles);
      }
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropCallback,
    multiple: false, // Only allow one file at a time
  });

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here ...</p>
      ) : (
        <>
          <p>Drag and drop a file here, or click to select a file</p>
        </>
      )}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default Dropzone;