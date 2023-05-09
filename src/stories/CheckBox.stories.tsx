import { Meta, ComponentStory } from '@storybook/react';
import { CheckBox, CheckBoxProps} from '../components/CheckBox';
import { FieldValues, useForm } from 'react-hook-form';

const meta: Meta<CheckBoxProps> = {
  title: 'Components/React-Hook-Form/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
};

// この書き方は推奨ではないが、react-hook-formのuseFormの値をコンポーネントに渡そうと思ったら、これしかない。
// https://storybook.js.org/blog/component-story-format-3-0/
const Template: ComponentStory<typeof CheckBox> = (args) => {
  const { register } = useForm<FieldValues>();

  return (
    <CheckBox {...args} register={register} />
  );
};

export const Normal = Template.bind({});
Normal.args = {
  name: "consent",
  labelText: "同意する",
};

export default meta;
