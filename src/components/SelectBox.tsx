import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

type SelectBoxOption = {
  value: string;
  label: string;
};

export type SelectProps = {
  name: string;
  labelText: string;
  register: UseFormRegister<FieldValues>;
  options: SelectBoxOption[];
};

export const SelectBox = ({ name, options, register, labelText }: SelectProps) => {
  return (
    <label>
      {labelText}
      <select {...register(name)}>
        {options.map((option: SelectBoxOption) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

