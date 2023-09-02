/* import { useState } from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Demo = () => {
  const [isActive, setIsActive] = useState(false);
  const onChange = () => {
    setIsActive(!isActive);
  };
  return <Checkbox checked={isActive} onChange={onChange} label="Check me" />;
};

export const Primary = {
  args: {
    checked: false,
    label: 'Unchecked',
  },
};

export const Checked = {
  args: {
    checked: true,
    label: 'Checked',
  },
};

export const Disabled = {
  args: {
    checked: false,
    label: 'Disabled',
    disabled: true,
  },
};

export const DisabledChecked = {
	args: {
		checked: true,
		label: 'Disabled&Checked',
		disabled: true,
	},
}; */

import React, { useState } from 'react';
import { useForm, useController } from 'react-hook-form';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Unchecked = () => {
  const [isActive, setIsActive] = useState(false);
  const { control } = useForm();

  const { field } = useController({
    name: 'checkboxField',
    control,
    defaultValue: false,
  });

  const onChange = () => {
    setIsActive(!isActive);
  };

  return (
    <Checkbox
      id="myCheckbox"
      formName="myForm"
      control={control}
      field={field}
      label="Check me"
      onChange={onChange}
    />
  );
};

export const Checked = () => {
  const [isActive, setIsActive] = useState(true);
  const { control } = useForm();

  const { field } = useController({
    name: 'checkboxField',
    control,
    defaultValue: true,
  });

  const onChange = () => {
    setIsActive(!isActive);
  };

  return (
    <Checkbox
      id="myCheckbox"
      formName="myForm"
      control={control}
      field={field}
      label="Check me"
      onChange={onChange}
    />
  );
};

export const UncheckedDisabled = () => {
  const [isActive, setIsActive] = useState(false);
  const { control } = useForm();

  const { field } = useController({
    name: 'checkboxField',
    control,
    defaultValue: false,
  });

  const onChange = () => {
    setIsActive(!isActive);
  };

  return (
    <Checkbox
      id="myCheckbox"
      formName="myForm"
      control={control}
      field={field}
      label="Check me"
      disabled
      onChange={onChange}
    />
  );
};

export const CheckedDisabled = () => {
  const [isActive, setIsActive] = useState(true);
  const { control } = useForm();

  const { field } = useController({
    name: 'checkboxField',
    control,
    defaultValue: true,
  });

  const onChange = () => {
    setIsActive(!isActive);
  };

  return (
    <Checkbox
      id="myCheckbox"
      formName="myForm"
      control={control}
      field={field}
      label="Check me"
      disabled
      onChange={onChange}
    />
  );
};
