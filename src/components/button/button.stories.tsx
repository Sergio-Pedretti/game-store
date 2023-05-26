import { Button } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {},
  render: () => <Button />,
}
