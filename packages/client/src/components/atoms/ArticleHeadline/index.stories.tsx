import Component, { Props } from "./";
import { Meta, Story } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Client/ArticleHeadline",
  component: Component,
} as Meta;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<Props> = (args) => <Component {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const primaryOptions: Props = {
  children: "headline",
};
Primary.args = primaryOptions;
