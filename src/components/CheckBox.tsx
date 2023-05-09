import { FieldValues, UseFormRegister } from 'react-hook-form';

export type CheckBoxProps = {
    name: string;
    labelText: string;
    register: UseFormRegister<FieldValues>;
};
export const CheckBox = ({ name, register, labelText }: CheckBoxProps) => (
  <label>
      {labelText}
      <input type='checkbox'{...register(name)} onBlur={() => register(name)} />
  </label>
);
