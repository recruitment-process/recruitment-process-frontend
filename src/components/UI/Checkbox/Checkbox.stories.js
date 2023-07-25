import { Checkbox } from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export const Primary = {
  args: {
    checked: false,
    label: 'Check me'
  }
}

export const Checked = {
  args: {
    checked: true,
    label: 'I`m checked'
  }
}

export const Disabled = {
  args: {
    checked: false,
    label: 'Disabled',
    disabled: true
  }
}

export const DisabledChecked = {
  args: {
    checked: true,
    label: 'Disabled&Checked',
    disabled: true
  }
}
