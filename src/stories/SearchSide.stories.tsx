import { Meta, StoryObj } from "@storybook/react";
import SearchSide from "@/components/SearchSide";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof SearchSide>;

const meta: Meta<StoryProps> = {
  component: SearchSide,
  // argTypes: {}
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Aside: Story = {
  args: {},
  render: (args: StoryProps) => <SearchSide />,
};
