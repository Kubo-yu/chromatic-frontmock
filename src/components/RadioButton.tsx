import React from 'react';
import { UseFormRegister } from 'react-hook-form';

type RadioOption = {
  value: string;
  label: string;
};

export type RadioProps = {
  name: string;
  labelText: string;
  options: RadioOption[];
  register: UseFormRegister<any>;
};

export const RadioButton = ({
  name,
  labelText,
  options,
  register,
}: RadioProps) => (
  <div>
    <p>{labelText}</p>
    {options.map((option) => (
      <label key={option.value}>
        <input
          type="radio"
          value={option.value}
          {...register(name)}
        />
        {option.label}
      </label>
    ))}
  </div>
);
