import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import Rates from "@/components/shared/Rates";

type StoryProps = ComponentProps<typeof Rates>;

const meta: Meta<StoryProps> = {
  component: Rates,
  // argTypes: {}
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    stars: 5,
    rate: 2,
    isFixed: true,
  },
  render: (args: StoryProps) => (
    <Rates stars={args.stars} rate={args.rate} isFixed={args.isFixed} />
  ),
};
