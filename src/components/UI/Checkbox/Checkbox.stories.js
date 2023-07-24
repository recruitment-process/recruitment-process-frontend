import { Checkbox } from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}



export const Primary = {
  args: {
    checked: false,
    text: 'Some text',
    state: 'normal'
  }
}
