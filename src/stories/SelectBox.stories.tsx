import { Meta, ComponentStory } from '@storybook/react';
import { SelectBox, SelectProps } from '../components/SelectBox';
import { FieldValues, useForm } from 'react-hook-form';

const selectOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const meta: Meta<SelectProps> = {
  title: 'Components/React-Hook-Form/SelectBox',
  component: SelectBox,
  tags: ['autodocs'],
};

// この書き方は推奨ではないが、react-hook-formのuseFormの値をコンポーネントに渡そうと思ったら、これしかない。
// https://storybook.js.org/blog/component-story-format-3-0/
const Template: ComponentStory<typeof SelectBox> = (args) => {
  const { register } = useForm<FieldValues>();

  return (
    <SelectBox {...args} register={register} />
  );
};

export const Normal = Template.bind({});
Normal.args = {
  name: "flavor",
  labelText: "Flavor",
  options: selectOptions,
};

export default meta;
