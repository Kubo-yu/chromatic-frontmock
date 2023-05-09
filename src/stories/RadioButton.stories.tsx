import { Meta, ComponentStory } from '@storybook/react';
import { RadioButton, RadioProps } from '../components/RadioButton';
import { FieldValues, useForm } from 'react-hook-form';

const radioOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

const meta: Meta<RadioProps> = {
  title: 'Components/React-Hook-Form/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
};

// この書き方は推奨ではないが、react-hook-formのuseFormの値をコンポーネントに渡そうと思ったら、これしかない。
// https://storybook.js.org/blog/component-story-format-3-0/
const Template: ComponentStory<typeof RadioButton> = (args) => {
  const { register } = useForm<FieldValues>();

  return (
    <RadioButton {...args} register={register} />
  );
};

export const Normal = Template.bind({});
Normal.args = {
  name: "gender",
  labelText: "性別",
  options: radioOptions,
};

export default meta;
