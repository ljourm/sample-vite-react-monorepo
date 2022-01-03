import Component, { Props } from "./";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Client/DefaultLayout",
  component: Component,
} as Meta;

const Template: Story<Props> = (args) => <Component {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  children: <p>content</p>,
};
