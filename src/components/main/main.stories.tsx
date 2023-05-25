import { Main } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Main',
  component: Main,
} as Meta<typeof Main>

type Story = StoryObj<typeof Main>

export const Default: Story = {
  args: {
    title: 'React',
    subTitle: 'Next',
  },
  name: 'Default Main',
  render: (args) => <Main {...args} />,
}
