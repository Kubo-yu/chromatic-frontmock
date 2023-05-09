import React, { useRef, ChangeEvent } from "react";

export interface FileButtonProps {
  onSelect: (files: FileList) => void;
  label: string
}

export default function FileButton({ onSelect, label }: FileButtonProps) {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      onSelect(files);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>{label}</button>
      <input
        type="file"
        ref={fileInput}
        style={{ display: "none" }}
        onChange={handleFileSelected}
      />
    </div>
  );
}
