

import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { Input } from '../components/Input';
import { CheckBox } from '../components/CheckBox';
import { SelectBox } from "../components/SelectBox";
import { RadioButton } from '../components/RadioButton';
import Button from '../components/Button';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  'First Name': yup.string().required(),
  Email: yup.string().email().required(),
  Flavor: yup.string().required(),
  Consent: yup.boolean().oneOf([true], 'The checkbox must be checked'),
  Gender: yup.string().required(),
});


const selectOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const radioOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

export type FormValues = {
  'First Name': string;
  'Email': string;
  Consent: boolean;
  Flavor: string;
  Gender: string;
}

function t() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
      resolver: yupResolver(schema), // yupでバリデーションを行う
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      alert(JSON.stringify(data));
      console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="First Name" labelText="名前" register={register} />
            {errors['First Name'] && <span>This field is required</span>} {/* エラーがある場合はエラーメッセージを表示 */}
            <Input name="Email" labelText="Email" register={register} />
            {errors['Email'] && <span>Please enter a valid email address</span>}
            <SelectBox
              name="Flavor"
              labelText="Flavor"
              register={register}
              options={selectOptions}
            />
            {errors.Flavor && <span>This field is required</span>}
            <RadioButton name="Gender" labelText="性別" options={radioOptions} register={register} />
            {errors.Gender && <span>This field is required</span>}
            <CheckBox name="Consent" labelText="同意する" register={register} />
            {errors.Consent && errors.Consent.message && <span>{errors.Consent.message.toString()}</span>}
            <Button type="submit" label="送信"/>
        </form>
    );
}

export default t;