import { Meta, ComponentStory } from '@storybook/react';
import { Input, InputProps } from '../components/Input';
import { FieldValues, useForm } from 'react-hook-form';

const meta: Meta<InputProps> = {
  title: 'Components/React-Hook-Form/Input',
  component: Input,
  tags: ['autodocs'],
};

// この書き方は推奨ではないが、react-hook-formのuseFormの値をコンポーネントに渡そうと思ったら、これしかない。
// https://storybook.js.org/blog/component-story-format-3-0/
const Template: ComponentStory<typeof Input> = (args) => {
  const { register } = useForm<FieldValues>();

  return (
    <Input {...args} register={register} />
  );
};

export const Normal = Template.bind({});
Normal.args = {
  name: "name",
  labelText: "名前",
};

export default meta;
