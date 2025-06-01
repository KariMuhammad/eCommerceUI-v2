import SearchInput from "@/components/shared/SearchInput";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof SearchInput>;

const meta: Meta<StoryProps> = {
  component: SearchInput,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Header: Story = {
  args: {},
  render: (args: StoryProps) => <SearchInput />,
};
