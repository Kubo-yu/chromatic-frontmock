
import { UseFormRegister, FieldValues } from "react-hook-form";

export type InputProps = {
    name: string;
    labelText: string;
    register: UseFormRegister<FieldValues>;
};

export const Input = ({ name, labelText, register }: InputProps) => (
    <label>
        {labelText}
        <input {...register(name)} />
    </label>
);