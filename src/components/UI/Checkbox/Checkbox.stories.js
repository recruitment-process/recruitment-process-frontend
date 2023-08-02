import { useState } from 'react';
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
};
