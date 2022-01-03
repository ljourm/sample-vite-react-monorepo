import Component from "./";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Client/Header",
  component: Component,
} as Meta;

const Template: Story = (args) => <Component {...args} />;

export const Standard = Template.bind({});
