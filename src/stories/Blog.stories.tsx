import { Blog } from "@/components";

import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof Blog>;

const meta: Meta<StoryProps> = {
  component: Blog,
  // argTypes: {}
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {},
  render: (args: StoryProps) => <Blog {...args} />,
};
