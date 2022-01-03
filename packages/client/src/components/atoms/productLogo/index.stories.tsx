import Component from "./";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Client/ProductLogo",
  component: Component,
} as Meta;

const Template: Story = (args) => <Component {...args} />;

export const Primary = Template.bind({});
