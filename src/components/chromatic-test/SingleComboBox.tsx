import { useState } from 'react';


interface SingleComboBoxProps<T> {
  items: string[];
  selectedItem: string | null;
  onSelect: (item: string | null) => void;
}

export  default function SinglComboBox<T>({
  items,
  selectedItem,
  onSelect,
}: SingleComboBoxProps<T>) {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedItem = items[selectedIndex - 1] || null; // -1 to account for the default option
    onSelect(selectedItem);
    console.log(selectedItem)
  };

  return (
    <select value={selectedItem ? selectedItem.toString() : ''} onChange={handleSelect}>
      <option value="">-- Select Country --</option>
      {items.map((item, index) => (
        <option key={index} value={item.toString()}>
          {item} 
        </option>
      ))}
    </select>
  );
}
