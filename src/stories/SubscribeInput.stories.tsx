import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import SubscribeInput from "@/components/SubscribeInput";

type StoryProps = ComponentProps<typeof SubscribeInput>;

const meta: Meta<StoryProps> = {
  component: SubscribeInput,
  // argTypes: {}
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {},
  render: (args: StoryProps) => <SubscribeInput {...args} />,
};
