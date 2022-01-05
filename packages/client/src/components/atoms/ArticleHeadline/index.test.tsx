import { render } from "@testing-library/react";
import Component from "./";

test("snapshot", () => {
  const { asFragment } = render(<Component>headline</Component>);
  expect(asFragment()).toMatchSnapshot();
});
