import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import VerticalProduct from "@/components/shared/VerticalProduct";

type StoryProps = ComponentProps<typeof VerticalProduct>;

const meta: Meta<StoryProps> = {
  component: VerticalProduct,
  // argTypes: {}
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    product: {
      id: 1,
      name: "Apple iPad Air 4 10.9-inch Wi-Fi 256GB",
      price: 599,
      discount: 10,
      rate: 3,
      image1: "/products_2_2.webp",
      image2: "/products_3_2.webp",
      category: "tablets",
    },
  },
  render: (args: StoryProps) => <VerticalProduct {...args} />,
};
